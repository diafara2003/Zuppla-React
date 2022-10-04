import { NavigationModel } from "../../../SharedComponents/Navigation";
import { Person } from '@mui/icons-material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Routes, Navigate, Route } from "react-router-dom";
import { PerfilPages,UsuarioPages } from '../Views';

export const rutas: NavigationModel[] = [

    {
        path: "/usuarios/usuario",
        texto: "Admin. de usuarios",

        Icono: () => < Person />
    },
    {
        path: "/usuarios/perfil",
        texto: "Admin. de perfiles",
        Icono: () => <AppRegistrationIcon />
    },
]



export default function RoutesGestionUsuario() {
    return (
        <Routes>
            <Route path="/usuario" element={<UsuarioPages />} />
            <Route path="/perfil" element={<PerfilPages />} />
            <Route path="/*" element={<Navigate to="/usuarios/usuario" />}></Route>
        </Routes>
    )
}
