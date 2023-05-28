import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  fallback: ['system ui', 'arial'],
})

export const metadata = {
  title: 'Tariq Atlas Portfolio',
  description:
    'Mohammad Tariq Atlas Portfolio created by mohammad tariq atlas in Next Js 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
