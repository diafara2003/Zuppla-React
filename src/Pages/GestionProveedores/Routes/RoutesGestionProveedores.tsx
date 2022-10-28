import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavigationModel } from '../../../SharedComponents/Navigation';
import { DatosContactos, DatosNotifiaciones, CamaraComercioPage, DocumentosAdjuntosPage, EspecialidadesPage, NovedadesPage } from '../../GestionProveedores';


import { Badge } from '@mui/material';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { FolderOutlined } from '@mui/icons-material';
export const rutas: NavigationModel[] = [
    {
        path: "/gestionproveedor/InfGeneral",
        texto: "Información general",
        Icono: () => <BusinessOutlinedIcon />
    },
    {
        path: "/gestionproveedor/Especialidades",
        texto: "Especialidades",
        Icono: () => < StarBorderOutlinedIcon />
    },
    {
        path: "/gestionproveedor/DatosContactos",
        texto: "Datos contacto",
        Icono: () => < ContactsOutlinedIcon />
    },
    {
        path: "/gestionproveedor/DatosNotificaciones",
        texto: "Datos notificaciones",
        Icono: () => < ContactMailOutlinedIcon />
    },
    {
        path: "/gestionproveedor/DocumentosAdjuntos",
        texto: "Documentos",
        Icono: () => < FolderOutlined />
    },
    {
        path: "/gestionproveedor/CamaraComercio",
        texto: "Cámara de comercio",
        Icono: () => < DescriptionOutlinedIcon />
    },
    {
        path: "/gestionproveedor/Novedades",
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
            <Route path="/InfGeneral" element={<InformacionGeneralPage />} />
            <Route path="/DatosContactos" element={<DatosContactos />} />
            <Route path="/DatosNotificaciones" element={<DatosNotifiaciones />} />
            <Route path="/DocumentosAdjuntos" element={<DocumentosAdjuntosPage />} />
            <Route path="/CamaraComercio" element={<CamaraComercioPage />} />
            <Route path="/Novedades" element={<NovedadesPage />} />
            <Route path="/Especialidades" element={<EspecialidadesPage />} />

            <Route path="/*" element={<Navigate to="/gestionproveedor/InfGeneral" />}></Route>
        </Routes>
    )
}
