import { createContext } from 'react'
import { AuthContextProps, ConstructoraDTO, INITIAL_STATE, UserSessionModel } from '../model/AuthModel';

export interface IAuthContext {
    updateSession: (data: AuthContextProps) => void,
    removeSession: () => void,
    storeUsuario: AuthContextProps

}


const INITIAL_CONTEXT: IAuthContext = {

    updateSession: (data: AuthContextProps) => { },

    storeUsuario: INITIAL_STATE,
    removeSession: () => { }
}


export const AuthContext = createContext<IAuthContext>(INITIAL_CONTEXT);