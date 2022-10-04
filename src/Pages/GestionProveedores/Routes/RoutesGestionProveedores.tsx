import React from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { GestionProveedoresPage,InformacionGeneralPage, DatosContactos, DatosNotifiaciones, CamaraComercioPage,DocumentosAdjuntosPage,EspecialidadesPage,NovedadesPage} from '../../GestionProveedores';

export default function RoutesGestionProveedores() {
    return (
        <Routes>
            <Route path="/InfGeneralPage" element={<InformacionGeneralPage />} />
            <Route path="/DatosContactosPage" element={<DatosContactos />} />
            <Route path="/DatosNotificaciones" element={<DatosNotifiaciones />} />
            <Route path="/DocumentosAdjuntosPage" element={<DocumentosAdjuntosPage />} />
            <Route path="/CamaraComercioPage" element={<CamaraComercioPage />} />            
            <Route path="/NovedadesPage" element={<NovedadesPage />} />
            <Route path="/EspecialidadesPage" element={<EspecialidadesPage />} />

            <Route path="/*" element={<Navigate to="/gestionproveedor/InfGeneralPage" />}></Route>
        </Routes>
    )
}
