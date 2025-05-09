import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { PokemonContext } from '../context'
import { type ContextState } from '../context/PokemonContext'

export const PrivateRoutes: React.FC = () => {

  const { 
    auth: { logged }
  } = useContext<ContextState>(PokemonContext)
  

  return logged ? 
    <Outlet /> 
  : <Navigate to={'/login'}/>
}
