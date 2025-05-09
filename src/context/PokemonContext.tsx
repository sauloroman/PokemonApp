import { createContext } from 'react'
import type { AuthState, PaginationState, UIState } from './interfaces/context.interfaces'

export interface ContextState {
  auth: AuthState,
  ui: UIState,
  pagination: PaginationState,
  loginUser: ( username: string ) => void,
  logoutUser: () => void,
  openModal: () => void,
  closeModal: () => void,
  setTypeSearch: ( status: boolean ) => void,
  setSearch: ( search: string ) => void,
  setAmountPokemonsPerPage: ( amount: number ) => void,
  setPagination: ( page: number, limit: number ) => void,
}

export const PokemonContext = createContext<ContextState | any>(null)