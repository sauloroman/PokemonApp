import { useQuery } from "@tanstack/react-query"
import { getPokemonTypes } from "../actions"

export const usePokemonsTypes = () => {

  const { data, isFetching } = useQuery({
    queryKey: ['pokemon-types'],
    queryFn: getPokemonTypes,
    staleTime: 1000 * 60 * 60
  })

  return {
    data,
    isFetching
  }

}