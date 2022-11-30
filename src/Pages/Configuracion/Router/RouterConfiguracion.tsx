import React, { lazy } from 'react'
import { NavigationModel } from '../../../SharedComponents/Navigation';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Routes, Route, Navigate } from 'react-router-dom';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import ManageAccountsTwoToneIcon from '@mui/icons-material/ManageAccountsTwoTone';
export const rutas: NavigationModel[] = [
    {
        path: "/configuracion/perfil",
        texto: "Administracion de perfiles",
        Icono: () => <ManageAccountsTwoToneIcon />
    },
    {
        path: "/configuracion/menu",
        texto: "Administracion de menus",
        Icono: () => <AccountTreeTwoToneIcon />
    }

];
const AdmMenus = lazy(() => import('../Views/AdmMenus/View/AdmMenus'));
const AdmPerfiles = lazy(() => import('../Views/AdmPerfiles/Views/AdmPerfiles'));


export const RouterConfiguracion = () => {
    return (
        <Routes>

          
            <Route path="/perfil" element={<AdmPerfiles />} />     
            <Route path="/menu" element={<AdmMenus />} /> 

            {/* Default */}
            <Route path="/*" element={<Navigate to="/configuracion/perfil" />}></Route>
        </Routes>
        )
}
