'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './ContextAPI/Controller'
import Layout from '@/components/Layout'
import { Provider } from 'react-redux'
import store from '@/redux/store'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"
        ></link>
        <title>National Land Authority - NLA</title>
      </head>
      <body className={inter.className}>
        <div>
          <Provider store={store} >
            <AuthProvider>
              <Layout>
                {children}
              </Layout>
            </AuthProvider>
          </Provider>
        </div>
      </body>
    </html>
  )
}
