import React from 'react'
import { PokemonContext } from './PokemonContext'
import { usePokemonContext } from '../auth/hooks/usePokemonContext'

interface PokemonProviderProps {
  children: React.ReactNode
}

export const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {

  const { auth, ui } = usePokemonContext()

  return (
    <PokemonContext.Provider value={{
      auth,
      ui
    }}>
      { children }
    </PokemonContext.Provider>
  )
}
