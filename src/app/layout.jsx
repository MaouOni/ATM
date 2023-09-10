import './globals.css'
import { Inter } from 'next/font/google'
import ATM from './components/atm'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ATM',
  description: 'Bienvenido',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es-mx">
      <body className={inter.className}> <ATM /> {children} </body>
    </html>
  )
}
