import { createContext } from 'react'
import { INITIAL_STATE_NOTIFICACION, NotificacionTotalDTO, tipoNovedad } from '../model';
import { AuthContextProps, ConstructoraDTO, INITIAL_STATE, INITIAL_STATE_CONSTRUCTORA, UserSessionModel } from '../model/AuthModel';

export interface IAuthContext {
    updateUser: (data: UserSessionModel) => void,
    addSession: (data: AuthContextProps) => void,
    eliminarNovedad: (consstructora: number, tipo: tipoNovedad) => void,
    removeSession: () => void,
    addConstructoraFilter: (data:ConstructoraDTO) => void,
    constructoraFilter:ConstructoraDTO,
    storeUsuario: AuthContextProps,
    notificacion: NotificacionTotalDTO,

}


const INITIAL_CONTEXT: IAuthContext = {
    addSession: (data: AuthContextProps) => { },
    updateUser: (data: UserSessionModel) => { },
    eliminarNovedad: (consstructora: number, tipo: tipoNovedad) => { },
    storeUsuario: INITIAL_STATE,
    removeSession: () => { },
    notificacion: INITIAL_STATE_NOTIFICACION,
    addConstructoraFilter: (data:ConstructoraDTO) => { },
    constructoraFilter: INITIAL_STATE_CONSTRUCTORA
}


export const AuthContext = createContext<IAuthContext>(INITIAL_CONTEXT);