import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'El Roi Odenigbo Foundation - Compassion in Action',
  description:
    'El Roi Odenigbo Foundation brings compassion and hope to vulnerable communities through education, health support, and skills empowerment in Nigeria.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
