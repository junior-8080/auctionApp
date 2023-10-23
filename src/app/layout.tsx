import type { Metadata } from 'next'
import { PT_Sans} from 'next/font/google'
import './globals.css'

const pt_Sans = PT_Sans({ 
  weight:"400",
  subsets: ['latin'] 
})


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pt_Sans.className}>{children}</body>
    </html>
  )
}
