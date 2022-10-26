import { useContext } from "react";
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Auth";
import { MenuPages } from "../Pages/Menu";

export const ProtectedRoutes = () => {

    const { storeUsuario } = useContext(AuthContext);

    return storeUsuario.token != "" ? (
        <MenuPages />
    ) : (
        <Navigate to="/login" />
    );
}