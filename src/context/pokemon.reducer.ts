import type { AppState } from './interfaces/state.interface';
import {
  AuthActionTypes,
  UIActionTypes,
  type ActionTypes,
} from './actions/types.action';

export const initialState: AppState = {
  auth: {
    logged: false,
    user: null,
  },
  ui: {
    isModalOpen: false,
  },
};

export const pokemonReducer = (
  state: AppState = initialState,
  action: ActionTypes
): AppState => {
  switch (action.type) {
    case AuthActionTypes.login:
      return {
        ...state,
        auth: {
          ...state.auth,
          logged: true,
          user: action.payload,
        },
      };
    case AuthActionTypes.logout:
      return {
        ...state,
        auth: {
          ...state.auth,
          logged: false,
          user: null,
        },
      };
    case UIActionTypes.openModal:
      return {
        ...state,
        ui: {
          ...state.ui,
          isModalOpen: true,
        },
      };
    case UIActionTypes.closeModal:
      return {
        ...state,
        ui: {
          ...state.ui,
          isModalOpen: false,
        },
      };
    default: return state
  }
};
