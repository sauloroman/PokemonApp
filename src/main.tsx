import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './router/Router'
import { PokemonProvider } from './context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './css/general.css'
import './css/styles.css'
import './css/themes.css'
import './css/queries.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={ queryClient }>
      <PokemonProvider>
        <main className='light-theme'>
          <RouterProvider router={ Router } />
        </main>
      </PokemonProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
)
