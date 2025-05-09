import { createContext } from 'react'
import type { AuthState, UIState } from './interfaces/context.interfaces'

export interface ContextState {
  auth: AuthState,
  ui: UIState,
  loginUser: ( username: string ) => void,
  logoutUser: () => void,
  openModal: () => void,
  closeModal: () => void,
  setTypeSearch: ( status: boolean ) => void
}

export const PokemonContext = createContext<ContextState | any>(null)