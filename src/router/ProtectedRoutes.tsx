import { useContext } from "react";
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Auth";
import { MenuPages } from "../Pages/Menu";

export const ProtectedRoutes = () => {

    const { getSession } = useContext(AuthContext);

    return getSession().token != "" ? (
        <MenuPages />
    ) : (
        <Navigate to="/login" />
    );
}