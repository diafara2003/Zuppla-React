import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavigationModel } from "../../../../SharedComponents/Navigation";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';


export const rutas: NavigationModel[] = [
    {
        path: "/informes/proveedor/compra",
        texto: "Ordenes compra",
        Icono: () => <InsertDriveFileOutlinedIcon />
    },
    {
        path: "/informes/proveedor/facturas",
        texto: "Facturas",
        Icono: () => <InsertDriveFileOutlinedIcon />
    },
];


const InfCompras = lazy(() => import('../Components/Compras/view/InfCompras'));
const InfFacturas = lazy(() => import('../Components/Facturas/view/InfFacturas'));

export default function RouterInfProveedor() {
    return (
        <Routes>
            <Route path="/" element={<InfCompras />} />
            <Route path="/proveedor" element={<InfFacturas />} />


            <Route path="/proveedor/compra" element={<InfCompras />} />
            <Route path="/proveedor/facturas" element={<InfFacturas />} />


            {/* <Route path="/*" element={<Navigate to="informes/proveedor/compra" />}></Route> */}
        </Routes>
    )
}
