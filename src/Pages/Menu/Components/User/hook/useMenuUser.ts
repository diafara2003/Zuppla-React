import { useContext, useEffect, useState } from 'react';
import { AuthContext, UserSessionModel } from "../../../../../Auth";

export const useMenuUser = () => {
    const { getSession } = useContext(AuthContext);
    const [user, setUser] = useState({

        id: 0,
        idEmpresa: 0,
        logo: "",
        nombreEmpresa: "N N",
        nombreUsuario: "",
        tipo: "",
        userCorreo: ""
    });


    useEffect(() => {
        
        const { user } = getSession();

        setUser(user);

    }, []);



    return {
        user

    };
}

