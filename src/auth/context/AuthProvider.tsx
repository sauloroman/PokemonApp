import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { ActionTypes, authReducer, initialStateAuth } from './auth.reducer'

const userLocalStorage = 'user-pokedex'

const init = () => {
  const userPokedex = JSON.parse( localStorage.getItem(userLocalStorage)! ) || null

  return {
    logged: !!userPokedex,
    user: userPokedex,
  }
}

export const AuthProvider: React.FC = () => {

  const [authState, dispatch] = useReducer( authReducer, initialStateAuth, init )

  const loginUser = ( username: string ) => {
    const loginAction = {
      type: ActionTypes.login,
      payload: username
    }

    localStorage.setItem(userLocalStorage, JSON.stringify(username) )
    dispatch( loginAction )
  }

  const logoutUser = () => {
    localStorage.removeItem(userLocalStorage)
    const logoutAction = { type: ActionTypes.logout }
    dispatch( logoutAction )
  }

  return (
    <AuthContext.Provider value={{
      ...authState,

      loginUser,
      logoutUser
    }}>

    </AuthContext.Provider>
  )
}
