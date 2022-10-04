import { lazy, LazyExoticComponent } from "react";

type JSXComnent = () => JSX.Element



interface Route {
    path: string;
    component: LazyExoticComponent<JSXComnent> | JSXComnent;
}


export const routes: Route[] = [
  
 
    {
        path: "/",
        component: lazy(() => import(/* webpackChunkName: "HomePages" */"../Pages/Home/views/HomePages"))
    },
    {
        path: "/home",
        component: lazy(() => import(/* webpackChunkName: "HomePages" */"../Pages/Home/views/HomePages"))
    },
    {
        path: "/gestionproveedor",
        component: lazy(() => import(/* webpackChunkName: "GestionProveedoresPage" */"../Pages/GestionProveedores/GestionProveedoresPage"))
    }
];