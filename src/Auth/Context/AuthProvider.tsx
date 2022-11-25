

import { useReducer, useState, useEffect } from 'react'
import { TipoNotificacion } from '../../Pages/GestionProveedores/Views/DatosNotificaciones/Model/TipoNotificacion'
import { requestAPI, APiMethod } from '../../Provider'
import { AuthContextProps, INITIAL_STATE, UserSessionModel, NotificacionDTO, tipoNovedad, NotificacionTotalDTO, INITIAL_STATE_NOTIFICACION } from '../model'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'


interface Props {
    children: JSX.Element | JSX.Element[]
}


export const AuthProvider = ({ children }: Props) => {

    const [storeUsuario, dispatch] = useReducer(authReducer, INITIAL_STATE);
    const [notificacion, setNotificacion] = useState<NotificacionTotalDTO>(INITIAL_STATE_NOTIFICACION);

    const addSession = (data: AuthContextProps) => {

        dispatch({ type: 'addSession', payload: data });
        
    }

    useEffect(() => {

        if (storeUsuario.token != "" && storeUsuario.token != null)
            getNotificacion();
    }, [storeUsuario])

    const removeSession = () => {

        
        dispatch({ type: 'removeSession' });
    }
    const updateUser = (data: UserSessionModel) => {


        dispatch({ type: 'updateUser', payload: data });

    }



    const getNotificacion = async () => {

        const response = await requestAPI<NotificacionDTO[]>({
            metodo: `Novedad/ConsultarNovedad`,
            type: APiMethod.GET,
        });


        const datos: NotificacionTotalDTO =INITIAL_STATE_NOTIFICACION;

        datos.notificacionesLicitacion = response!.filter(c => c.tipo == "Licitacion")
        datos.notificacionesProveedor = response!.filter(c => c.tipo == "Proveedor")
        let cantTotalNotifi = 0;
        let cantTotalNotifiProve = 0;
        let cantTotalNotifiLici = 0;
        response!.forEach(element => {
            cantTotalNotifi = cantTotalNotifi + element.contNotificaciones;
        });

        response!.forEach(element => {
            if(element.tipo == "Proveedor")
                cantTotalNotifiProve = cantTotalNotifiProve + element.contNotificaciones;
        });

        response!.forEach(element => {
            if(element.tipo == "Licitacion")
            cantTotalNotifiLici = cantTotalNotifiLici + element.contNotificaciones;
        });
        datos.total = cantTotalNotifi;
        datos.totalProveedores = cantTotalNotifiProve;
        datos.totalLicitaciones = cantTotalNotifiLici;

        setNotificacion(datos);
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
