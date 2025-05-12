import React from 'react'
import { useNavPage } from '../../shared/hooks'
import { useQueryClient } from '@tanstack/react-query'
import { Bar, ReturnButton } from '../../shared/components'
import { Pokemon } from '../components'
import type { Pokemon as PokemonType} from '../interfaces/pokemon.interface'
import { Navigate } from 'react-router-dom'

export const PokemonPage: React.FC = () => {

  const { getPokemonIdFromParams } = useNavPage()
  const pokemondId = getPokemonIdFromParams()

  console.log(pokemondId)

  const queryClient = useQueryClient()
  const pokemon = queryClient.getQueryData<PokemonType>(['pokemon', pokemondId ])

  if ( !pokemon ) {
    return (<Navigate to={'404'} />)
  }

  return (
  <div className="pokemon">
    <div className="bar--app">
      <Bar />
    </div>    
    <div className="container">
      <div className="pokemon__return">
        <ReturnButton>&larr; Regresar</ReturnButton>
      </div>
      <Pokemon data={pokemon} />
    </div>
  </div>
  )
}
