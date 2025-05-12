import React, { useContext } from 'react'
import { PokemonContext, type ContextState } from '../context/PokemonContext'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicRoutes: React.FC = () => {
  const { 
    auth: { logged },
    ui: { theme }
  } = useContext<ContextState>(PokemonContext)

  return logged 
  ? <Navigate to={'/'}/>
  : <div className={`${theme}`}><Outlet /></div> 
}
