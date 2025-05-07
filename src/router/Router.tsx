import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage, PokedexPage, PokemonPage, SettingsPage } from "../pokemons/pages";
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoutes } from "./PrivateRoutes";

export const Router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: '',
            element: <PokedexPage />
          },
          {
            path: 'pokemon/:id',
            element: <PokemonPage />
          }, 
          {
            path: 'settings',
            element: <SettingsPage />
          }
        ]
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
])