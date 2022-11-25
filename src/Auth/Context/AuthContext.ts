import { createContext } from 'react'
import { NotificacionDTO, tipoNovedad } from '../model';
import { AuthContextProps, INITIAL_STATE, UserSessionModel } from '../model/AuthModel';

export interface IAuthContext {
    updateUser: (data: UserSessionModel) => void,
    addSession: (data: AuthContextProps) => void,
    eliminarNovedad: (consstructora: number, tipo: tipoNovedad) => void,
    removeSession: () => void,
    storeUsuario: AuthContextProps,
    notificacion: NotificacionDTO[]


}


const INITIAL_CONTEXT: IAuthContext = {

    addSession: (data: AuthContextProps) => { },
    updateUser: (data: UserSessionModel) => { },
    eliminarNovedad: (consstructora: number, tipo: tipoNovedad) => { },
    storeUsuario: INITIAL_STATE,
    removeSession: () => { },
    notificacion: []
}


export const AuthContext = createContext<IAuthContext>(INITIAL_CONTEXT);