
import { ReactNode } from 'react'
import './globals.css'
import { Poppins as Poppins, Roboto_Flex as Roboto } from 'next/font/google'
import Providers from '@/components/Providers'
import { Toaster } from '@/components/ui/Toaster'
import { Copyright } from '@/components/Copyright'
import { NavBar } from '@/components/NavBar'


const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const poppins = Poppins({ subsets: ['latin'], weight: '300', variable: '--font-poppins' })


export const metadata = {
  title: 'DotaLobbySquad',
  description: 'React Website',
}

export default async function RootLayout({
  children,
  authModal
}: {
  children: ReactNode
  authModal: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} font-sans`}>
          <Providers>
            <NavBar />
            {authModal}
            {children}
            <Toaster />
            <Copyright />
          </Providers>
      </body>
    </html>
  )
}