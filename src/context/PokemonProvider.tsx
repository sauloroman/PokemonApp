import React, { useEffect } from 'react'
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
    setPokemons,
    setTheme
  } = usePokemonContext()

  useEffect(() => {
    const user = JSON.parse( localStorage.getItem('user-pokedex')! )
    if ( user ) loginUser( user )

    const theme = JSON.parse( localStorage.getItem('theme-pokedex')! ) || 'light'
    setTheme( theme )

    const pokemonsPerPage = JSON.parse( localStorage.getItem('amountPokemonsPerPage-pokedex')!) || 16
    setAmountPokemonsPerPage(pokemonsPerPage)
  }, [])

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
      setTheme,
    }}>
      { children }
    </PokemonContext.Provider>
  )
}
