'use client'

import { Header } from './Header'
import { HeaderPhone } from './HeaderPhone'

export const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <HeaderPhone />
      <main>{children}</main>
    </>
  )
}
