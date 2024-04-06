import { HomeView } from '@/views/Home'

export async function generateMetadata({ params, searchParams }, parent) {
  const previousImages = (await parent).openGraph?.images || []

  return {
    openGraph: {
      images: ['/images/logo_portfolio.png', ...previousImages],
    },
  }
}

export default function Home() {
  return <HomeView />
}
