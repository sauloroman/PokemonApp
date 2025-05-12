import React, { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { PokemonContext } from '../context'
import { type ContextState } from '../context/PokemonContext'

export const PrivateRoutes: React.FC = () => {
  const { 
    auth: { logged },
    ui: { theme }
  } = useContext<ContextState>(PokemonContext)

  return logged 
  ? <div className={`${theme}`}><Outlet /></div> 
  : <Navigate to={'/login'}/>
}
  