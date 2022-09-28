import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GestionProveedoresPage } from './Pages/GestionProveedores/GestionProveedoresPage'
import LoginPages from './Pages/Login/views/LoginPages'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     {/* <GestionProveedoresPage />    */}
     <LoginPages />
  </React.StrictMode>
)
