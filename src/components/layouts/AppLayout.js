'use client'

import { Header } from "./Header"

export const AppLayout = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
