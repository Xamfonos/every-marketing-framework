import type { Metadata } from 'next'
import { Archivo, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'No Norm Co. - Marketing Roadmaps & Frameworks',
  description: 'Learn marketing through first principles. Apply frameworks with AI. Community-driven roadmaps and resources to help marketers master their craft.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body className="font-display">{children}</body>
    </html>
  )
}
