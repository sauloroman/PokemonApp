import React from 'react'
import { PokemonContext } from './PokemonContext'
import { usePokemonContext } from '../auth/hooks/usePokemonContext'

interface PokemonProviderProps {
  children: React.ReactNode
}

export const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {

  const { 
    state, 

    closeModal, 
    loginUser, 
    logoutUser, 
    openModal,
    setTypeSearch 
  } = usePokemonContext()

  return (
    <PokemonContext.Provider value={{
      auth: state.auth,
      ui: state.ui,
    
      loginUser,
      logoutUser,
      openModal,
      closeModal,
      setTypeSearch
    }}>
      { children }
    </PokemonContext.Provider>
  )
}
