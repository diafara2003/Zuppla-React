
import { Route, Routes, Navigate } from 'react-router-dom';

import LoginPages from '../Pages/Login/views/LoginPages';
import { MenuPages } from '../Pages/Menu/views/MenuPages';
import { AuthPages } from '../Auth';
import { GestionProveedoresPage } from '../Pages/GestionProveedores/';
import { ProtectedRoutes } from './ProtectedRoutes';
import { HomePages } from '../Pages/Home/views/HomePages';


export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="/login" element={<LoginPages />}></Route>



                <Route element={<ProtectedRoutes />}>
                    <Route path="/" element={<HomePages />}></Route>
                    <Route path="/home" element={<HomePages />}></Route>



                    <Route path="/gestionproveedor/*" element={<GestionProveedoresPage />} />
                </Route>

            </Routes>
        </>

    )
}

