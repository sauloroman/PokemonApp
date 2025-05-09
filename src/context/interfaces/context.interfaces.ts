import type { Pokemon } from "../../pokemons/interfaces/pokemon.interface";

export interface AuthState {
  logged: boolean,
  user: string | null
}

export interface UIState {
  isModalOpen: boolean,
  typeSearch: boolean,
  search: string,
  amountPokemonsPerPage: number,
}

export interface PokemonsState {
  page: number,
  items: Pokemon[] | [],
}

export interface AppState {
  auth: AuthState,
  ui: UIState,
  pokemons: PokemonsState,
}