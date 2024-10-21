import React from 'react'
import { AppRouter } from './router/AppRouter'
import { Navbar } from './ui/components'
import { AuthProvider } from './auth/context'

export const HeroesApp = () => {
  return (
    <>
    <AuthProvider>
      <AppRouter />
     </AuthProvider>
    </>
  )
}
