import React, { useContext } from 'react'
import { AuthContext } from '../auth/context'
import { MarvelPage } from '../heroes/pages';
import { AppRouter } from './AppRouter';

export const PublicRouter = ( { children }) => {
    const { logged } = useContext( AuthContext );
  return (
    !logged ? children : <AppRouter/>  
  )
}
