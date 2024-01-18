import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const inter = Roboto({ subsets: ['latin'], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: 'Newsletter Challange',
  description: 'Frontend Mentor - Newsletter Challange',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
