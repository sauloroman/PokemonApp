import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { PokemonContext } from '../context'
import type { ContextValue } from '../context/PokemonContext'

export const PrivateRoutes: React.FC = () => {

  const {  } = useContext<ContextValue>(PokemonContext)
  

  return isAuthenticated ? 
    <Outlet /> 
  : <Navigate to={'/login'}/>
}
