import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
