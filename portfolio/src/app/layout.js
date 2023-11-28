import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'aboura bouchra ikram',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title> Aboura bouchra ikram</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}