import { useQuery } from "@tanstack/react-query"
import { getPokemon } from "../actions"

export const usePokemon = ( id: string ) => {

  const { data, isFetching } = useQuery({
    queryKey: ['pokemon', { id } ],
    queryFn: () => getPokemon(id),
    staleTime: 1000 * 60 * 60.
  })

  return {
    data: data!,
    isFetching
  }

}