import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavigationModel } from '../../../SharedComponents/Navigation';
import { PasswordOutlined, PersonOutline } from '@mui/icons-material';




const DatosUsuarioPage = lazy(() => import('../Components/DatosUsuario/view/DatosUsuarioPage'));
const CambiarClavePage = lazy(() => import('../Components/CambiarClave/view/CambiarClavePage'));


export const rutas: NavigationModel[] = [
    {
        path: "/seguridad/misdatos",
        texto: "Mis datos",
        Icono: () => <PersonOutline />
    },
    {
        path: "/seguridad/cambiarclave",
        texto: "Cambiar contraseña",
        Icono: () => <PasswordOutlined />
    }
]



export default function RoutesSeguridadPrivacidad() {
    return (
        <Routes>
            <Route path="/misdatos" element={<DatosUsuarioPage />} />
            <Route path="/cambiarclave" element={<CambiarClavePage />} />
            
            <Route path="/*" element={<Navigate to="/seguridad/misdatos" />}></Route>
        </Routes>
    )
}

