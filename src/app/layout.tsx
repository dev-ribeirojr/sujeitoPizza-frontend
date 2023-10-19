import "../styles/global.scss"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </AuthProvider>
      </body>
    </html>
  )
}
