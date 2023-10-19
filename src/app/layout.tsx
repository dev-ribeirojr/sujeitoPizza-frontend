import "../styles/global.scss"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { AuthProvider } from "@/contexts/AuthContext"

export const metadata: Metadata = {
  title: 'Sujeito Pizza',
  description: 'sistema pizzaria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
