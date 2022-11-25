import { createContext } from 'react'
import { INITIAL_STATE_NOTIFICACION, NotificacionTotalDTO, tipoNovedad } from '../model';
import { AuthContextProps, INITIAL_STATE, UserSessionModel } from '../model/AuthModel';

export interface IAuthContext {
    updateUser: (data: UserSessionModel) => void,
    addSession: (data: AuthContextProps) => void,
    eliminarNovedad: (consstructora: number, tipo: tipoNovedad) => void,
    removeSession: () => void,
    storeUsuario: AuthContextProps,
    notificacion: NotificacionTotalDTO


}


const INITIAL_CONTEXT: IAuthContext = {

    addSession: (data: AuthContextProps) => { },
    updateUser: (data: UserSessionModel) => { },
    eliminarNovedad: (consstructora: number, tipo: tipoNovedad) => { },
    storeUsuario: INITIAL_STATE,
    removeSession: () => { },
    notificacion: INITIAL_STATE_NOTIFICACION
}


export const AuthContext = createContext<IAuthContext>(INITIAL_CONTEXT);