import { createContext } from 'react'
import { AuthContextProps, ConstructoraDTO, INITIAL_STATE, UserSessionModel } from '../model/AuthModel';

export interface IAuthContext {
    updateUser: (data: UserSessionModel) => void,
    addSession: (data: AuthContextProps) => void,
    removeSession: () => void,
    storeUsuario: AuthContextProps

}


const INITIAL_CONTEXT: IAuthContext = {

    addSession: (data: AuthContextProps) => { },
    updateUser: (data: UserSessionModel) => { },
    storeUsuario: INITIAL_STATE,
    removeSession: () => { }
}


export const AuthContext = createContext<IAuthContext>(INITIAL_CONTEXT);