import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import SideMenu from '@/components/SideMenu/SideMenu'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: 'WhatsApp Clone',
  description: 'Messaging, simplified',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-row top-0 left-0 right-0 bottom-0 overflow-hidden w-[100dvw] h-[100dvh]`}>
        {/* <SideMenu /> */}
        {children}
      </body>
    </html>
  )
}
