import {
  AuthActionTypes,
  PaginationActionTypes,
  UIActionTypes,
  type ActionTypes,
} from './actions/types.action';
import type { AppState } from './interfaces/context.interfaces';

export const initialState: AppState = {
  auth: {
    logged: false,
    user: null,
  },
  ui: {
    isModalOpen: false,
    typeSearch: false,
    search: '',
    amountPokemonsPerPage: 20,
  },
  pagination: {
    page: 1,
    limit: 20,
  }
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
    case UIActionTypes.setTypeSearch:
      return {
        ...state,
        ui: {
          ...state.ui,
          typeSearch: action.payload
        }
      }
    case UIActionTypes.setSearch:
      return {
        ...state,
        ui: {
          ...state.ui,
          search: action.payload
        }
      }
    case PaginationActionTypes.setPagination:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload.page,
          limit: action.payload.limit,
        }
      }
    default: return state
  }
};
