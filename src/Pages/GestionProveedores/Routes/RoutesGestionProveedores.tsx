import { lazy } from 'react'
import { Navigate,  Route, Routes } from 'react-router-dom'
import { NavigationModel } from '../../../SharedComponents/Navigation';
import { DatosContactos, DatosNotifiaciones, CamaraComercioPage, DocumentosAdjuntosPage, EspecialidadesPage, NovedadesPage } from '../../GestionProveedores';


import { Badge } from '@mui/material';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Folder, FolderOutlined } from '@mui/icons-material';
export const rutas: NavigationModel[] = [
    {
        path: "/gestionproveedor/InfGeneralPage",
        texto: "Información general",
        Icono: () => <BusinessOutlinedIcon />
    },
    {
        path: "/gestionproveedor/EspecialidadesPage",
        texto: "Especialidades",
        Icono: () => < StarBorderOutlinedIcon />
    },
    {
        path: "/gestionproveedor/DatosContactosPage",
        texto: "Datos contacto",
        Icono: () => < ContactsOutlinedIcon />
    },
    {
        path: "/gestionproveedor/DatosNotificaciones",
        texto: "Datos notificaciones",
        Icono: () => < ContactMailOutlinedIcon />
    },
    {
        path: "/gestionproveedor/DocumentosAdjuntosPage",
        texto: "Documentos",
        Icono: () => < FolderOutlined />
    },
    {
        path: "/gestionproveedor/CamaraComercioPage",
        texto: "Cámara de comercio",
        Icono: () => < DescriptionOutlinedIcon />
    },
    {
        path: "/gestionproveedor/NovedadesPage",
        texto: "Novedades",
        Icono: () => <Badge color="primary" badgeContent={2}>
            < NotificationsNoneOutlinedIcon />
        </Badge>
    }
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
