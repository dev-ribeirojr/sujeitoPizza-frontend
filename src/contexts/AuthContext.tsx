"use client"
import { createContext, ReactNode, useState } from "react";
import { destroyCookie } from "nookies";
import Router from "next/router";

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
  token: string
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
    console.log(email)
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