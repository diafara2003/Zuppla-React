import React from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { GestionProveedoresPage,InformacionGeneralPage, DatosContactos, DatosNotifiaciones, CamaraComercio } from '../../GestionProveedores';
export default function RoutesGestionProveedores() {
    return (
        <Routes>
            <Route path="/InfGeneralPage" element={<InformacionGeneralPage />} />
            <Route path="/DatosContactosPage" element={<DatosContactos />} />
            <Route path="/DatosNotificaciones" element={<DatosNotifiaciones />} />
            <Route path="/CamaraComercio" element={<CamaraComercio />} />

            <Route path="/*" element={<Navigate to="/gestionproveedor/InfGeneralPage" />}></Route>
        </Routes>
    )
}
