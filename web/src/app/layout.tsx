import './globals.css'
import { Roboto } from 'next/font/google'

const inter = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'] 
})

export const metadata = {
  title: 'well shop',
  description: 'Generated by create next app',
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
