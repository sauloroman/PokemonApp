import { pokemonApi } from "../../api/pokemon.api";
import type { Pokemon } from "../interfaces/pokemon.interface";

export const getPokemon = async ( url: string ): Promise<Pokemon> => {
  const { data } = await pokemonApi.get<Pokemon>(`/pokemon/${url}`)
  return data
}