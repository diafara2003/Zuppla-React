import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavigationModel } from "../../../../SharedComponents/Navigation";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

export const rutas: NavigationModel[] = [
    {
        path: "/informes/proveedor/compra",
        texto: "Ordenes de compra",
        Icono: () => <DescriptionOutlinedIcon />
    },
    {
        path: "/informes/proveedor/contratos",
        texto: "Contratos",
        Icono: () => <DescriptionOutlinedIcon />
    },
    // {
    //     path: "/informes/proveedor/facturas",
    //     texto: "Información de facturas",
    //     Icono: () => <DescriptionOutlinedIcon />
    // },
];


const InfCompras = lazy(() => import('../Components/Compras/view/InfCompras'));
const InfContratos = lazy(() => import('../Components/Contratos/view/InfContratos'));
const InfFacturas = lazy(() => import('../Components/Facturas/view/InfFacturas'));

export default function RouterInfProveedor() {
    return (
        <Routes>
          
            <Route path="/proveedor/compra" element={<InfCompras />} />
            <Route path="/proveedor/contratos" element={<InfContratos />} />
            <Route path="/proveedor/facturas" element={<InfFacturas />} />


            <Route path="/*" element={<Navigate to="/informes/proveedor/compra" />}></Route>
        </Routes>
    )
}
