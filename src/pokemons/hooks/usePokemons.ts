import { useQuery } from "@tanstack/react-query"
import { getPokemons, getPokemonsPerType } from "../actions"

export const usePokemons = ( search: string ) => {

  const { data: pokemonsPerType, isFetching: isFetchingPokemonsPerType } = useQuery({
    queryKey: ['pokemons', { search } ],
    queryFn: () => getPokemonsPerType(`/type/${search}`),
    staleTime: 1000 * 60 * 60,
  })
  
  const { data: allPokemons, isFetching: isFetchingAllPokemons } = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons('/pokemon/?limit=400'),
    staleTime: 1000 * 60 * 60,
  }) 

  return {
    pokemons: search ? pokemonsPerType : allPokemons,
    isFetching: search ? isFetchingPokemonsPerType : isFetchingAllPokemons,
  }

}