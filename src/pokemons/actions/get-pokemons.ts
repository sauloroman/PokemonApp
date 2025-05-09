import { pokemonApi } from "../../api/pokemon.api"
import type { PokemonList, PokemonResult } from "../interfaces/pokemon-list.interface"

export const getPokemons = async ( url: string ): Promise<PokemonResult[]> => {
  const { data } = await pokemonApi.get<PokemonList>(url)
  const pokemons = data.results
  return pokemons
}