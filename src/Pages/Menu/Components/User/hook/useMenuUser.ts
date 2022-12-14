import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, NameStorageConstructora, NameStoragetoken, NameStorageUsuario } from "../../../../../Auth";


export const useMenuUser = () => {
    const { storeUsuario } = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({

        id: 0,
        idEmpresa: 0,
        logo: "",
        nombreEmpresa: "N N",
        nombreUsuario: "",
        userCorreo: ""
    });


    useEffect(() => {

        const { user } = storeUsuario;

        setUser(user);
        


    }, []);

    

    const stringAvatar = () => {        
        if (user.nombreUsuario == "") return {}
        let split = user.nombreUsuario.trimStart().trimEnd().split(' ');

        if (split.length == 1)
            split.push(' ');

        return {
            sx: { color: '#FBFBFB', background: '#003972' },
            children: `${split[0][0]}${split[1][0]}`,
        };
    }

    const signOut = () => {
        localStorage.removeItem(NameStoragetoken);
        localStorage.removeItem(NameStorageUsuario);
        localStorage.removeItem(NameStorageConstructora);

        navigate('/login', { replace: true })
    }

    const changePassword = () => {
        navigate('/seguridad/', { replace: true })
    }

    return {
        user, signOut, stringAvatar, changePassword


    };
}

