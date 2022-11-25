

import { useReducer, useState } from 'react'
import { requestAPI, APiMethod } from '../../Provider'
import { AuthContextProps, INITIAL_STATE, UserSessionModel, NotificacionDTO, tipoNovedad } from '../model'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'


interface Props {
    children: JSX.Element | JSX.Element[]
}


export const AuthProvider = ({ children }: Props) => {

    const [storeUsuario, dispatch] = useReducer(authReducer, INITIAL_STATE);
    const [notificacion, setNotificacion] = useState<NotificacionDTO[]>([]);

    const addSession = (data: AuthContextProps) => {

        dispatch({ type: 'addSession', payload: data });
        getNotificacion();
    }


    const removeSession = () => {

        dispatch({ type: 'removeSession' });
    }
    const updateUser = (data: UserSessionModel) => {


        dispatch({ type: 'updateUser', payload: data });
    }



    const getNotificacion = async () => {
debugger;
        const data = await requestAPI<NotificacionDTO[]>({
            metodo: `Novedad/ConsultarNovedad`,
            type: APiMethod.GET,
        });


        if (data != null) setNotificacion(data!);


    }

    const eliminarNovedad = (consstructora: number, tipo: tipoNovedad) => {


    }


    return (
        <AuthContext.Provider value={{
            storeUsuario,
            notificacion,
            eliminarNovedad,
            // Methods
            addSession,
            removeSession,
            updateUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}
