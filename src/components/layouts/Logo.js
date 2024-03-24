'use client'

import Image from 'next/image'

export const Logo = () => {
  return (
    <div className="absolute bottom-10 left-10">
        <Image src="/images/logo_portfolio_white.png" width={40} height={40} alt="logo"/>
    </div>
  )
}
