import { createContext } from 'react'
import { AuthContextProps, ConstructoraDTO, INITIAL_STATE, UserSessionModel } from '../model/AuthModel';

export interface IAuthContext {
    login: (token: string, usuario: UserSessionModel) => void,
    getSession: () => AuthContextProps,
    changeConstructora: (data: ConstructoraDTO) => void,
    signOut: () => void,
    state: AuthContextProps

}


const INITIAL_CONTEXT: IAuthContext = {

    getSession: () => { return INITIAL_STATE;},
    changeConstructora: (data: ConstructoraDTO) => { },
    login: (token: string, usuario: UserSessionModel) => { },
    signOut: () => { },
    state: INITIAL_STATE
}


export const AuthContext = createContext<IAuthContext>(INITIAL_CONTEXT);