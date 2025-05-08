export interface AppState {
  auth: {
    logged: boolean,
    user: string | null,
    loginUser: ( username: string ) => void,
    logoutUser: () => void
  },
  ui: {
    isModalOpen: boolean,
    openModal: () => void,
    closeModal: () => void,
  },
}
