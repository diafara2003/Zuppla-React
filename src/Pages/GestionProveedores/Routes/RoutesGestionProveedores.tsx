import { lazy } from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import { NavigationModel } from '../../../SharedComponents/Navigation';
import { GestionProveedoresPage, DatosContactos, DatosNotifiaciones, CamaraComercioPage, DocumentosAdjuntosPage, EspecialidadesPage, NovedadesPage } from '../../GestionProveedores';
import BusinessIcon from '@mui/icons-material/Business';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Badge } from '@mui/material';
export const rutas: NavigationModel[] = [
    {
        path: "/gestionproveedor/InfGeneralPage",
        texto: "Información general",
        Icono: () => <BusinessIcon />
    },
    {
        path: "/gestionproveedor/DatosContactosPage",
        texto: "Datos contacto",
        Icono: () => < ContactsIcon />
    },
    {
        path: "/gestionproveedor/DatosNotificaciones",
        texto: "Datos notificaciones",
        Icono: () => < ContactMailIcon />
    },
    {
        path: "/gestionproveedor/DocumentosAdjuntosPage",
        texto: "Documentos",
        Icono: () => < FolderOpenTwoToneIcon />
    },
    {
        path: "/gestionproveedor/CamaraComercioPage",
        texto: "Cámara de comercio",
        Icono: () => < DescriptionIcon />
    },
    {
        path: "/gestionproveedor/NovedadesPage",
        texto: "Novedades",
        Icono: () => <Badge color="primary" badgeContent={2}>
            < NotificationsActiveIcon />
        </Badge>
    },
    {
        path: "/gestionproveedor/EspecialidadesPage",
        texto: "Especialidades",
        Icono: () => < StarRateIcon />
    },
]



const InformacionGeneralPage = lazy(() => import('../../GestionProveedores/Views/InformacionGeneral/View/InformacionGeneralPage'));


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
