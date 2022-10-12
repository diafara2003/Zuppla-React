import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, NameStorageConstructora, NameStoragetoken, NameStorageUsuario, UserSessionModel } from "../../../../../Auth";
import { theme } from '../../../../../theme/theme';

export const useMenuUser = () => {
    const { state } = useContext(AuthContext);
    const navigate = useNavigate();
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

        const { user } = state;

        setUser(user);

    }, []);

    const color = theme.palette.primary.main;
    const stringAvatar = (name: string) => {

        if (name == "") return {}

        return {
            sx: { color, background: '#ebebeb' },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    const signOut = () => {
        localStorage.removeItem(NameStoragetoken);
        localStorage.removeItem(NameStorageUsuario);
        localStorage.removeItem(NameStorageConstructora);

        navigate('/login', { replace: true })
    }

    return {
        user, signOut,stringAvatar

    };
}

