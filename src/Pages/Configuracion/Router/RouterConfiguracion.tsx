import React, { lazy } from 'react'
import { NavigationModel } from '../../../SharedComponents/Navigation';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Routes, Route, Navigate } from 'react-router-dom';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
export const rutas: NavigationModel[] = [
    {
        path: "/configuracion/menu",
        texto: "Administracion de menus",
        Icono: () => <AccountTreeTwoToneIcon />
    },
    {
        path: "/configuracion/perfil",
        texto: "Administracion de perfiles",
        Icono: () => <ManageAccountsTwoToneIcon />
    }

];
const AdmMenus = lazy(() => import('../Views/AdmMenus/View/AdmMenus'));
const AdmPerfiles = lazy(() => import('../Views/AdmPerfiles/Views/AdmPerfiles'));


export const RouterConfiguracion = () => {
    return (
        <Routes>

            <Route path="/menu" element={<AdmMenus />} />
            <Route path="/perfil" element={<AdmPerfiles />} />      

            {/* Default */}
            <Route path="/*" element={<Navigate to="/configuracion/menu" />}></Route>
        </Routes>
        )
}
