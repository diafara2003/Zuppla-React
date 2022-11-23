import { useContext } from "react";
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Auth";
import { MenuPages } from "../Pages/Menu";
import { MenuOptionProvider } from "../Pages/Menu/context/MenuOptionProvider";

export const ProtectedRoutes = () => {

    const { storeUsuario } = useContext(AuthContext);

    return storeUsuario.token != "" ? (


        <MenuOptionProvider >
            <MenuPages />
        </MenuOptionProvider>
    ) : (
        <Navigate to="/login" />
    );
}