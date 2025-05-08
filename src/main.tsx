import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router/Router'

import './css/general.css'
import './css/styles.css'
import './css/themes.css'
import './css/queries.css'
import { PokemonProvider } from './context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonProvider>
      <main className='light-theme'>
        <RouterProvider router={ Router } />
      </main>
    </PokemonProvider>
  </StrictMode>,
)
