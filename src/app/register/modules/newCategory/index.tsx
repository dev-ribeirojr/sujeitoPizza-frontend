"use client"
import styles from './newcategory.module.scss';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

import { Form } from '@/components/ui/form';
import { InputText } from '@/components/ui/input';
import { LabelIcon } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

import { icons } from '@/config/icons';
import { setupAPICliente } from '@/services/api';

interface CategoryProps {
  name: string
}

const schemaCategory = z.object({
  name: z.string().min(3, "Categoria precisa ter pelo menos 3 caracteres")
})

export function NewCategory() {

  const [loading, setLoading] = useState<boolean>(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<CategoryProps>({
    resolver: zodResolver(schemaCategory)
  })

  async function handleNewCategory({ name }: CategoryProps) {
    //cadastrar categoria
    setLoading(true)

    const apiClient = setupAPICliente();

    try {

      const response = await apiClient.post("/category", {
        name
      })

      toast.success("Categoria cadastrada com sucesso!")
      setLoading(false)
      reset();

    } catch (error) {

      toast.error("Não foi possivel cadastrar categoria")
      setLoading(false)
    }

  }

  return (
    <div className={styles.container}>
      <h1>Nova Categoria</h1>
      <Form onSubmit={handleSubmit(handleNewCategory)}>
        <LabelIcon icon={icons.category} >
          <InputText
            type='text'
            placeholder='Digite o nome da categoria'
            name='name'
            register={register}
          />
        </LabelIcon>
        {errors.name && <p>{errors.name.message}</p>}
        <Button type='submit' color='#101026' background='#3fffa3' loading={loading}>
          Cadastrar Categoria
        </Button>
      </Form>
    </div >
  )
}