import { createContext } from 'react'
import type { AuthState, PokemonsState, UIState } from './interfaces/context.interfaces'
import type { Generation } from '../pokemons/interfaces/pokemon-per-type.interface'

export interface ContextState {
  auth: AuthState,
  ui: UIState,
  pokemons: PokemonsState,
  loginUser: ( username: string ) => void,
  logoutUser: () => void,
  openModal: () => void,
  closeModal: () => void,
  setTypeSearch: ( status: boolean ) => void,
  setSearch: ( search: string ) => void,
  setAmountPokemonsPerPage: ( amount: number ) => void,
  setPokemonPage: ( page: number ) => void,
  setPokemons: ( pokemons: Generation[] | undefined ) => void
}

export const PokemonContext = createContext<ContextState | any>(null)