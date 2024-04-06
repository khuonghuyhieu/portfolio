import '../styles/globals.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Patrick_Hand as PatrickHand } from 'next/font/google'
import { AppLayout } from '@/components/layouts/AppLayout'
import { Logo } from '@/components/layouts/Logo'
import AppProviders from './providers'

const patrickHand = PatrickHand({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata = {
  title: 'Hieu Khuong',
  description: 'Portfolio of Hieu Khuong',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <meta property="og:title" content="Title Here" />
        <meta property="og:description" content="Description Here" />
        <meta property="og:image" content="image_url_here" />
      </head> */}
      <body className={patrickHand.className}>
        <AppProviders>
          <AppLayout>{children}</AppLayout>
          <Logo />
        </AppProviders>
      </body>
    </html>
  )
}
