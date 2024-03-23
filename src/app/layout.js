import "../styles/globals.css";
import { Patrick_Hand as PatrickHand } from 'next/font/google'


const patrickHand = PatrickHand({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata = {
  title: "Hieu Khuong",
  description: "Portfolio of Hieu Khuong",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={patrickHand.className}>{children}</body>
    </html>
  );
}
