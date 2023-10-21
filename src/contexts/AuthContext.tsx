'use client'
import Router from "next/router";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useState } from "react";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import { api } from "@/services/apiClient";
import { toast } from "react-toastify";
import { cookiesKey } from "@/constants/cookies";


type AuthContextData = {
  user: UserProps | undefined
  isAuthenticated: boolean,
  signIn: (credential: SignInProps) => Promise<void>
  signOut: () => void
  newUser: (credential: NewUserProps) => Promise<void>
}

type UserProps = {
  id: string,
  name: string,
  email: string,
  role: string,
  updated_at: string,
  created_at: string,
  status: string,
}

export type SignInProps = {
  email: string,
  password: string
}

export type NewUserProps = {
  name: string,
  email: string,
  password: string
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  try {
    destroyCookie(undefined, cookiesKey);
    Router.push('/');
  } catch {
    console.log("erro ao deslogar");
  }
}

export function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<UserProps>();

  const router = useRouter();

  async function signIn({ email, password }: SignInProps) {

    try {

      const response = await api.post("/session", {
        email,
        password
      })

      const { id, name, token, role, updated_at, created_at, status } = response.data

      // console.log(response.data)
      setCookie(undefined, cookiesKey, token, {
        maxAge: 60 * 60 * 24 * 30, // expira em 1 mês
        path: "/" //quais caminhos terão acesso aos cookies
      })

      setUser({ id, name, email, role, updated_at, created_at, status })

      //Passando o token para as proximas requisições 
      api.defaults.headers["Authorization"] = `Bearer ${token}`

      router.push("/dashboard")

    } catch (error) {
      console.log("Error", error)
      toast.error("Erro ao fazer login!")
    }
  }

  async function newUser({ name, email, password }: NewUserProps) {
    try {

      const response = await api.post("/users", {
        email, name, password
      })

      const { id, token, role, updated_at, created_at, status } = response.data;

      setCookie(undefined, cookiesKey, token, {
        maxAge: 60 * 60 * 24 * 30, // expira em 1 mês
        path: "/" //quais caminhos terão acesso aos cookies
      })

      setUser({ id, name, email, role, updated_at, created_at, status })

      //navegar usuário
      toast.success("Cadastro finalizado com sucesso!");

    } catch (error) {
      console.log(error)
      toast.error("Erro ao cadastrar novo usuário!")
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        signIn,
        signOut,
        newUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}