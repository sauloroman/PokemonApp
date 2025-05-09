export interface AuthState {
  logged: boolean,
  user: string | null
}

export interface UIState {
  isModalOpen: boolean,
  typeSearch: boolean,
}

export interface AppState {
  auth: AuthState,
  ui: UIState,
}