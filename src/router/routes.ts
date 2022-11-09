import { lazy, LazyExoticComponent } from "react";
import GestionProveedoresPage from '../Pages/GestionProveedores/GestionProveedoresPage';

type JSXComnent = () => JSX.Element



interface Route {
    path: string;
    Component: LazyExoticComponent<JSXComnent> | JSXComnent;
}


export const routes: Route[] = [


    {
        path: "/",
        Component: lazy(() => import(/* webpackChunkName: "HomePages" */"../Pages/Home/views/HomePages"))
    },
    {
        path: "/cambiarClave",
        Component: lazy(() => import(/* webpackChunkName: "cambiarClave" */"../Pages/SeguridadYPrivacidad/Components/CambiarClave/view/CambiarClavePage"))
    },
    {
        path: "/home",
        Component: lazy(() => import(/* webpackChunkName: "HomePages" */"../Pages/Home/views/HomePages"))
    },
    {
        path: "/gestionproveedor/*",
        Component: lazy(() => import(/* webpackChunkName: "GestionProveedoresPage" */"../Pages/GestionProveedores/GestionProveedoresPage"))
    },

    {
        path: "/usuarios/*",
        Component: lazy(() => import(/* webpackChunkName: "LayaoutUsuarioPages" */"../Pages/Usuarios/Layout/LayaoutUsuarioPages"))
    },

    {
        path: "/seguridad/*",
        Component: lazy(() => import(/* webpackChunkName: "seguridad" */"../Pages/SeguridadYPrivacidad/view/SeguridadPrivacidadPages"))
    }


]


