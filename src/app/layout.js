'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './ContextAPI/Controller'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
        ></link>
      </head>
      <body className={inter.className}>
        <div>
          <AuthProvider>
            <Layout>
              {children}
            </Layout>
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
