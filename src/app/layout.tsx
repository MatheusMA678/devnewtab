import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--inter' })

export const metadata = {
  title: 'Dev NewTab',
  description: 'Uma NewTab para devs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} font-sans bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <header className="px-12 h-24 flex items-center">
          <h1 className="font-bold text-2xl">Dev</h1>
        </header>
        {children}
      </body>
    </html>
  )
}
