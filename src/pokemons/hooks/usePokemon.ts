import { useQuery } from "@tanstack/react-query"
import { getPokemon } from "../actions"

export const usePokemon = ( pokemonSearch: string ) => {

  const { data, isFetching } = useQuery({
    queryKey: ['pokemon', pokemonSearch ],
    queryFn: () => getPokemon(pokemonSearch),
    staleTime: 1000 * 60 * 60.
  })

  return {
    data: data!,
    isFetching
  }

}