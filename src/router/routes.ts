import { lazy, LazyExoticComponent } from "react";

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
        Component: lazy(() => import(/* webpackChunkName: "GestionProveedoresPage" */"../Pages/GestionProveedores/GestionProveedoresPage"))
    }
];