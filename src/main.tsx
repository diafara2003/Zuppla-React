import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GestionProveedoresPage } from './Sitio/Web/Pages/GestionProveedores/GestionProveedoresPage'
import LoginPages from './Sitio/Web/Pages/Login/Pages/LoginPages'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     {/* <GestionProveedoresPage />    */}
     <LoginPages />
  </React.StrictMode>
)
