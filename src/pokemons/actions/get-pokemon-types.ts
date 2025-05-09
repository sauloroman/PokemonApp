import { pokemonApi } from "../../api/pokemon.api";
import type { PokemonList, PokemonResult } from "../interfaces/pokemon-list.interface";

export const getPokemonTypes = async (): Promise<PokemonResult[]> => {
  const { data } = await pokemonApi.get<PokemonList>('/type')
  const types = data.results
  return types
}