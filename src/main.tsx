import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { theme } from './theme/theme'
import { AppProveedor } from './AppProveedor'
import './styles/scroll.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <AppProveedor />

    </ThemeProvider>


  </React.StrictMode>
)
