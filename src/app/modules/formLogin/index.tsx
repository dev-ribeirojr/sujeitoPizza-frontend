"use client"
import { useContext, useState } from "react";

import { Form } from "@/components/ui/form";
import { LabelIcon } from "@/components/ui/label";

import { icons } from "../../../config/icons"
import { InputText } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AuthContext, SignInProps } from "@/contexts/AuthContext";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schemaLogin = z.object({
  email: z.string().email("Digite um email válido"),
  password: z.string().min(4, "Senha precisa ter pelo menos 4 caracteres")
})


export function FormLogin() {

  const { signIn } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm<SignInProps>({
    resolver: zodResolver(schemaLogin)
  })
  const [loading, setLoading] = useState<boolean>(false)

  async function handleLogin(data: SignInProps) {
    setLoading(true);
    await signIn(data);
    setLoading(false)
  }

  return (
    <Form onSubmit={handleSubmit(handleLogin)}>
      <LabelIcon icon={icons.email}>
        <InputText
          type="text"
          placeholder="Digite seu email"
          register={register}
          name="email"
        />
      </LabelIcon>
      {errors.email && <p>{errors.email.message}</p>}
      <LabelIcon icon={icons.password}>
        <InputText
          type="password"
          placeholder="Digite sua senha"
          register={register}
          name="password"
          autoComplete="off"
        />
      </LabelIcon>
      {errors.password && <p>{errors.password.message}</p>}
      <Button
        type="submit"
        loading={loading}
        color="#FFF"
        background="#ff3f4b"
      >
        Acessar Conta
      </Button>
    </Form>
  )
}