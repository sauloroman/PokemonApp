import { act, useReducer } from "react"
import { initialState, pokemonReducer } from ".."
import { AuthActionTypes, PaginationActionTypes, UIActionTypes } from "../actions/types.action"

const userLocalStorage = 'user-pokedex'

const init = () => {
  const userPokedex = JSON.parse( localStorage.getItem(userLocalStorage)! ) || null

  return {
    ...initialState,
    logged: !!userPokedex,
    user: userPokedex,
  }
}

export const usePokemonContext = () => {

  const [ state, dispatch ] = useReducer( pokemonReducer, initialState, init )

  const loginUser = ( username: string ) => {
    const actionLogin = {
      type: AuthActionTypes.login,
      payload: username
    }

    localStorage.setItem( userLocalStorage, JSON.stringify( username ) )
    dispatch( actionLogin )
  }

  const logoutUser = () => {
    const actionLogout = {
      type: AuthActionTypes.logout,
      payload: null
    }

    localStorage.removeItem( userLocalStorage )
    dispatch(actionLogout)
  }

  const openModal = () => {
    const actionOpenModal = {
      type: UIActionTypes.openModal,
      payload: true,
    }
    dispatch( actionOpenModal )
  }

  const closeModal = () => {
    const actionCloseModal = {
      type: UIActionTypes.openModal,
      payload: false,
    }
    dispatch( actionCloseModal )
  }

  const setTypeSearch = ( status: boolean ) => {
    const actionSetTypeSearch = {
      type: UIActionTypes.setTypeSearch,
      payload: status,
    }
    dispatch( actionSetTypeSearch )
  }

  const setSearch = ( search: string ) => {
    const actionSetSearch = {
      type: UIActionTypes.setSearch,
      payload: search
    }
    dispatch( actionSetSearch )
  }

  const setAmountPokemonsPerPage = ( amount: number ) => {
    const actionSetAmountPokemonsPerPage = {
      type: UIActionTypes.setAmountPokemonPerPage,
      payload: amount
    }
    dispatch( actionSetAmountPokemonsPerPage )
  }

  const setPagination = ( page: number, limit: number ) => {
    const action = {
      type: PaginationActionTypes.setPagination,
      payload: { page, limit }
    }
    dispatch( action )
  }

  return {
    state,
    
    loginUser,
    logoutUser,
    openModal,
    closeModal,
    setTypeSearch,
    setSearch,
    setAmountPokemonsPerPage,
    setPagination,
  }

} 