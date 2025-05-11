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
    setPokemonPage,
    setPokemons
  } = usePokemonContext()

  return (
    <PokemonContext.Provider value={{
      auth: state.auth,
      ui: state.ui,
      pokemons: state.pokemons,
    
      loginUser,
      logoutUser,
      openModal,
      closeModal,
      setTypeSearch,
      setSearch,
      setAmountPokemonsPerPage,
      setPokemonPage,
      setPokemons,
    }}>
      { children }
    </PokemonContext.Provider>
  )
}
