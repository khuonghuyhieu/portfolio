import { HomeView } from '@/views/Home'

export async function generateMetadata({ params, searchParams }, parent) {
  const previousImages = (await parent).openGraph?.images || []

  return {
    openGraph: {
      images: ['https://i.ibb.co/99S4wP1/avatar.jpg', ...previousImages],
    },
  }
}

export default function Home() {
  return <HomeView />
}
