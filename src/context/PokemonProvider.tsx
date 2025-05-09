import React from 'react'
import { PokemonContext } from './PokemonContext'
import { usePokemonContext } from './hooks/usePokemonContext'

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
    setTypeSearch,
    setSearch,
    setAmountPokemonsPerPage,
    setPagination,
  } = usePokemonContext()

  return (
    <PokemonContext.Provider value={{
      auth: state.auth,
      ui: state.ui,
      pagination: state.pagination,
    
      loginUser,
      logoutUser,
      openModal,
      closeModal,
      setTypeSearch,
      setSearch,
      setAmountPokemonsPerPage,
      setPagination,
    }}>
      { children }
    </PokemonContext.Provider>
  )
}
