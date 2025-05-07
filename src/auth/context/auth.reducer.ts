export const ActionTypes = {
  login: '[Auth] - Login',
  logout: '[Auth] - Logout'
} as const;

type ActionTypes = typeof ActionTypes[keyof typeof ActionTypes];

export interface StateAuth {
  logged: boolean,
  user: string | null,
}

export interface ActionState {
  type: ActionTypes,
  payload?: string 
}

export const initialStateAuth: StateAuth = {
  logged: false,
  user: null
}

export const authReducer = ( 
  state: StateAuth = initialStateAuth, 
  action: ActionState 
): StateAuth => {

  switch( action.type ) {
    case ActionTypes.login:
      return {
        ...state,
        logged: true,
        user: action.payload
      }
    case ActionTypes.logout:
      return {
        ...state,
        logged: false,
        user: null
      }
    default: 
      return state
  }

}