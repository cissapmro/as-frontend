import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amigo Secreto',
  description: 'Projeto Amigo Secrto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
