
import { Route, Routes, Navigate } from 'react-router-dom';

import LoginPages from '../Pages/Login/views/LoginPages';
import { MenuPages } from '../Pages/Menu/views/MenuPages';
import { AuthPages } from '../Auth';
import { GestionProveedoresPage } from '../Pages/GestionProveedores/';


export const AppRouter = () => {
    return (
        <>

            <AuthPages />

            <Routes>

                <Route path="/" element={<Navigate to="/home" />}></Route>

                <Route path="/login" element={<LoginPages />}></Route>
                <Route path="/home" element={<MenuPages />}></Route>
                <Route path="/gestionproveedor/*" element={<GestionProveedoresPage />} />

            </Routes>


        </>

    )
}

