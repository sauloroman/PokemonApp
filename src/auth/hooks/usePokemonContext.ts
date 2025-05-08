import { useReducer } from "react"
import { initialState, pokemonReducer } from "../../context"
import { AuthActionTypes, UIActionTypes } from "../../context/actions/types.action"

const userLocalStorage = 'user-pokedex'

const init = () => {
  const userPokedex = JSON.parse( localStorage.getItem(userLocalStorage)! ) || null

  return {
    ...initialState,
    auth: {
      logged: !!userPokedex,
      user: userPokedex,
    }
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

  return {
    auth: {
      ...state.auth,

      loginUser,
      logoutUser,
    },
    ui: {
      ...state.ui,

      openModal,
      closeModal,
    }
  }

} 