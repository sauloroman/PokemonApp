export const AuthActionTypes = {
  login: '[Auth] - Login',
  logout: '[Auth] - Logout'
} as const;

type AuthActionTypes = typeof AuthActionTypes[keyof typeof AuthActionTypes];

export const UIActionTypes = {
  openModal: '[UI] - Open Modal',
  closeModal: '[UI] - Close Modal',
  setTypeSearch: '[UI] - Set Type Search',
  setSearch: '[UI] - Set Search',
  setAmountPokemonPerPage: '[UI] - Set Amount Pokemons Per Page',
  setTheme: '[UI] - Set Theme',
} as const

type UIActionTypes = typeof UIActionTypes[keyof typeof UIActionTypes]

export const PokemonsActionTypes = {
  setPokemons: '[Pokemons] - Set Pokemons',
  setPokemonPage: '[Pokemons] - Set Pokemon Page'
}

type PokemonActionTypes = typeof PokemonsActionTypes[keyof typeof PokemonsActionTypes]

export interface ActionTypes {
  type: AuthActionTypes | UIActionTypes | PokemonActionTypes,
  payload: any
}
