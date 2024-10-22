import React, { useContext } from 'react'
import { AuthContext } from '../auth/context'
import { AppRouter } from './AppRouter';

export const PublicRouter = ( { children }) => {
    
  const { logged } = useContext( AuthContext );  

  return (
    !logged ? children : <AppRouter/>  
  )
}
