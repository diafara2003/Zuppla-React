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
        path: "/home",
        Component: lazy(() => import(/* webpackChunkName: "HomePages" */"../Pages/Home/views/HomePages"))
    },
    {
        path: "/gestionproveedor",
        Component: GestionProveedoresPage
    }
]