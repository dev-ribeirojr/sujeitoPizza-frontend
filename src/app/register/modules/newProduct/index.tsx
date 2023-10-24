"use client"
import styles from './newproduct.module.scss';

import { useState } from 'react';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Form } from '@/components/ui/form';
import { LabelIcon, LabelIconTextArea } from '@/components/ui/label';
import { InputText, InputTextArea } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { icons } from '@/config/icons';

import { InputFile } from './modules/inputFile/inputFile';
import { SelectCategory } from './modules/selectCategory';
import { setupAPICliente } from '@/services/api';

interface newProduct {
  name: string,
  price: string,
  description: string,
  category_id: string
}

const schemaProduct = z.object({
  name: z.string().min(3, "Nome do produto precisar ter pelo menos 3 caracteres"),
  price: z.string().nonempty("Digite um valor"),
  description: z.string().min(10, "Descrição precisar ter pelo menos 10 caracteres"),
  category_id: z.string(),
})


export function NewProduct() {

  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<any>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<newProduct>({
    resolver: zodResolver(schemaProduct)
  })

  async function handleNewProduct({ name, category_id, description, price }: newProduct) {
    setLoading(true);

    if (!image) {
      toast.error("Selecione uma imagen")
      setLoading(false)
      return;
    }
    try {

      const data = new FormData();
      // criando multipartForm para enviar na rota do backend
      data.append("name", name)
      data.append("price", price)
      data.append("category_id", category_id)
      data.append("description", description)
      data.append("file", image)

      const apiClient = setupAPICliente();

      const response = await apiClient.post("product", data);

      toast.success("Produto cadastrado com sucesso!")
      reset();

    } catch (error: any) {
      const messageError = error.response.data.error
      if (messageError === "Produto já cadastrado!") {

        toast.error(messageError)
        return;
      }
      toast.error("Erro ao cadastrar produto!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Novo Produto</h1>
      <Form onSubmit={handleSubmit(handleNewProduct)}>
        <InputFile setValue={setImage} />

        <SelectCategory register={register} name='category_id' />
        {errors.category_id && <p>{errors.category_id.message}</p>}

        <LabelIcon icon={icons.name}>
          <InputText
            type='text'
            name='name'
            register={register}
            placeholder='Digite o nome do produto'
          />
        </LabelIcon>
        {errors.name && <p>{errors.name.message}</p>}

        <LabelIcon icon={icons.money}>
          <InputText
            type='text'
            name='price'
            register={register}
            placeholder='R$: 00,00'
          />
        </LabelIcon>
        {errors.price && <p>{errors.price.message}</p>}

        <LabelIconTextArea icon={icons.description}>
          <InputTextArea
            name='description'
            register={register}
            placeholder='Digite a descrição do produto'
          />
        </LabelIconTextArea>
        {errors.description && <p>{errors.description.message}</p>}

        <Button
          type='submit'
          color='#101026'
          background='#3fffa3'
          loading={loading}
        >
          Cadastrar Produto
        </Button>
      </Form>
    </div>
  )
}