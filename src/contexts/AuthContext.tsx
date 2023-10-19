"use client"
import Router from "next/router";
import { createContext, ReactNode, useContext, useState } from "react";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import { api } from "@/services/apiClient";


type AuthContextData = {
  user: UserProps | undefined
  isAuthenticated: boolean,
  signIn: (credential: SignInProps) => Promise<void>
  signOut: () => void
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
type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push('/')
  } catch {

    console.log("erro ao deslogar")
    
  }
}

export function AuthProvider({ children }: AuthProviderProps) {

  const [user, setUser] = useState<UserProps>();

  async function signIn({ email, password }: SignInProps) {

    try {

      const response = await api.post("/session", {
        email,
        password
      })

      const { id, name, token, role, updated_at, created_at, status } = response.data

      // console.log(response.data)
      setCookie(undefined, '@nextauth.token', token, {
        maxAge: 60 * 60 * 24 * 30, // expira em 1 mês
        path: "/" //quais caminhos terão acesso aos cookies
      })

      setUser({ id, name, email, role, updated_at, created_at, status })

      //Passando o token para as proximas requisições 
      api.defaults.headers["Authorization"] = `Bearer ${token}`

      console.log("logou")

      //Redirecionar para o dashboard
      // Router.push("/dashboard")

    } catch (error) {
      console.log("Error", error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}


export const useAuthContext = () => useContext(AuthContext)