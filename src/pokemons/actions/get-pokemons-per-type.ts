import { pokemonApi } from "../../api/pokemon.api";
import type { Generation, PokemonPerType } from "../interfaces/pokemon-per-type.interface";

export const getPokemonsPerType = async ( url: string ): Promise<Generation[]> => {
  const { data } = await pokemonApi.get<PokemonPerType>( url )
  const pokemons = data.pokemon.map( p => p.pokemon )
  return pokemons
}