import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
      </body>
    </html>
  )
}
