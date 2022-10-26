import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, NameStorageConstructora, NameStoragetoken, NameStorageUsuario, UserSessionModel } from "../../../../../Auth";
import { theme } from '../../../../../theme/theme';

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

    const color = theme.palette.primary.main;
    const stringAvatar = (name: string) => {

        if (name == "") return {}
        let split = name.split(' ');

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

    return {
        user, signOut, stringAvatar

    };
}

