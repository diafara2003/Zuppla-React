import { createContext } from 'react'
import { AuthContextProps, ConstructoraDTO, INITIAL_STATE, UserSessionModel } from '../model/AuthModel';

export interface IAuthContext {
     getSession: () => AuthContextProps,

    state: AuthContextProps

}


const INITIAL_CONTEXT: IAuthContext = {

    getSession: () => { return INITIAL_STATE;},
   
    state: INITIAL_STATE
}


export const AuthContext = createContext<IAuthContext>(INITIAL_CONTEXT);