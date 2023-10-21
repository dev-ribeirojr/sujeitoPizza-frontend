'use client'
import styles from './newuser.module.scss'
import { useContext, useState } from "react";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuthContext, NewUserProps } from "@/contexts/AuthContext";
import { Form } from "@/components/ui/form";
import { InputText } from "@/components/ui/input";
import { LabelIcon } from "@/components/ui/label";
import { icons } from "@/config/icons";
import { Button } from "@/components/ui/button";

const schemaNewUser = z.object({
  name: z.string().min(3, "Digite um nome válido"),
  email: z.string().email("Digite um email válido"),
  password: z.string().min(4, "Senha precisa ter pelo menos 4 caracteres")
})

export default function NewUser() {

  const { register, handleSubmit, formState: { errors } } = useForm<NewUserProps>({
    resolver: zodResolver(schemaNewUser)
  })

  const { createNewUser } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false)

  async function handleNewUser(data: NewUserProps) {
    setLoading(true)
    await createNewUser(data)
    setLoading(false)
  }

  return (
    <main className={styles.ContainerCenter}>
      <h1>Novo Usuário</h1>
      <Form autoComplete="off" onSubmit={handleSubmit(handleNewUser)} >
        <LabelIcon icon={icons.user}>
          <InputText
            name="name"
            type="text"
            register={register}
            placeholder="Digite um nome"
          />
        </LabelIcon>
        {errors.name && <p>{errors.name.message}</p>}

        <LabelIcon icon={icons.email}>
          <InputText
            name="email"
            type="text"
            register={register}
            placeholder="Digite um email"
          />
        </LabelIcon>
        {errors.email && <p>{errors.email.message}</p>}

        <LabelIcon icon={icons.password}>
          <InputText
            autoComplete="off"
            name="password"
            type="password"
            register={register}
            placeholder="Digite uma senha"
          />
        </LabelIcon>
        {errors.password && <p>{errors.password.message}</p>}

        <Button
          type="submit"
          loading={loading}
        >
          Cadastrar
        </Button>
      </Form>
    </main>
  )
}