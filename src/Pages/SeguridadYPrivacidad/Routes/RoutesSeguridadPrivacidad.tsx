import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavigationModel } from '../../../SharedComponents/Navigation';
import { PasswordOutlined, PersonOutline } from '@mui/icons-material';



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

const MisDatos = lazy(() => import('../Components/DatosUsuario/view/DatosUsuarioPage'));
const CambiarClave = lazy(() => import('../Components/CambiarClave/view/CambiarClavePage'));



export default function RoutesSeguridadPrivacidad() {
    return (
        <Routes>
            <Route path="/misdatos" element={<MisDatos />} />
            <Route path="/cambiarclave" element={<CambiarClave />} />
            
            <Route path="/*" element={<Navigate to="/seguridad/misdatos" />}></Route>
        </Routes>
    )
}

