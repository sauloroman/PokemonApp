import { useReducer } from "react"
import { initialState, pokemonReducer } from ".."
import { AuthActionTypes, PokemonsActionTypes, UIActionTypes } from "../actions/types.action"
import type { Generation } from "../../pokemons/interfaces/pokemon-per-type.interface"

const userLocalStorage = 'user-pokedex'

export const usePokemonContext = () => {

  const [ state, dispatch ] = useReducer( pokemonReducer, initialState )

  const loginUser = ( username: string ) => {
    const actionLogin = {
      type: AuthActionTypes.login,
      payload: username
    }
    dispatch( actionLogin )
  }

  const logoutUser = () => {
    
    const actionLogout = {
      type: AuthActionTypes.logout,
      payload: null
    }

    localStorage.removeItem( userLocalStorage )
    localStorage.removeItem('page-pokedex')
    localStorage.removeItem('search-type-pokedex')
    localStorage.removeItem('amountPokemonsPerPage-pokedex')
    
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
      type: UIActionTypes.closeModal,
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

  const setPokemonPage = ( page: number | string ) => {
    const action = {
      type: PokemonsActionTypes.setPokemonPage,
      payload: page,
    }
    dispatch( action )
  }

  const setPokemons = ( pokemons: Generation[] | undefined ) => {
    const action = {
      type: PokemonsActionTypes.setPokemons,
      payload: pokemons
    }
    dispatch( action )
  }

  const setTheme = ( theme: string ) => {
    const action = {
      type: UIActionTypes.setTheme,
      payload: theme
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
    setPokemonPage,
    setPokemons,
    setTheme,
  }

} 