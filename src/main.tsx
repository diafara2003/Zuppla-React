import { ThemeProvider } from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import LoginPages from './Pages/Login/views/LoginPages'
import { GestionProveedoresPage } from './Pages/GestionProveedores/GestionProveedoresPage'
import { MenuPages } from './Pages/Menu/views/MenuPages'

import { theme } from './theme/theme'
import { AppProveedor } from './AppProveedor'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppProveedor />
      </BrowserRouter>
    </ThemeProvider>
    {/* <GestionProveedoresPage />    */}

  </React.StrictMode>
)
