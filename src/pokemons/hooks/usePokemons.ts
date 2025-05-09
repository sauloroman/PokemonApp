import { useQuery } from "@tanstack/react-query"
import { getPokemons, getPokemonsPerType } from "../actions"

type usePokemonsOptions = {
  search: string,
  page: number,
  limit: number
}

export const usePokemons = ({ limit, page, search }: usePokemonsOptions) => {

  const { data: pokemonsPerType, isFetching: isFetchingPokemonsPerType } = useQuery({
    queryKey: ['pokemons', { search, page } ],
    queryFn: () => getPokemonsPerType(`/type/${search}?page=${page}&limit=${limit}`),
    staleTime: 1000 * 60 * 60,
  })
  
  const { data: allPokemons, isFetching: isFetchingAllPokemons } = useQuery({
    queryKey: ['pokemons', { page }],
    queryFn: () => getPokemons('/pokemon?page=${page}&limit=${limit}'),
    staleTime: 1000 * 60 * 60,
  }) 

  return {
    pokemons: search ? pokemonsPerType : allPokemons,
    isFetching: search ? isFetchingPokemonsPerType : isFetchingAllPokemons,
  }

}