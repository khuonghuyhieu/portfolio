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

export async function generateMetadata({ params, searchParams }, parent) {
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: 'Hieu Khuong',
    description: 'Portfolio of Hieu Khuong',
    openGraph: {
      images: ['/logo_portfolio.png', ...previousImages],
    },
  }
}

// export const metadata = {
//   title: 'Hieu Khuong',
//   description: 'Portfolio of Hieu Khuong',
//   openGraph: {
//     images: ['/logo_portfolio.png'],
//   },
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={patrickHand.className}>
        <AppProviders>
          <AppLayout>{children}</AppLayout>
          <Logo />
        </AppProviders>
      </body>
    </html>
  )
}
