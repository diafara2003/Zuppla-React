import { createContext } from 'react'
import { AuthContextProps, ConstructoraDTO, INITIAL_STATE, UserSessionModel } from '../model/AuthModel';

export interface IAuthContext {
    updateSession: (data: AuthContextProps) => void,

    state: AuthContextProps

}


const INITIAL_CONTEXT: IAuthContext = {

    updateSession: (data: AuthContextProps) => {},
   
    state: INITIAL_STATE
}


export const AuthContext = createContext<IAuthContext>(INITIAL_CONTEXT);