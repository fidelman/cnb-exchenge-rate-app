import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'
import { appTheme } from './styles/theme.ts'

console.log(import.meta.env?.VITE_TEST_MODE)

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={appTheme}>
        <App/>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
