'use client'

import React from 'react'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/src/theme'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  )
}
