

import { useReducer } from 'react'
import { AuthContextProps, ConstructoraDTO, INITIAL_STATE, INITIAL_STATE_CONSTRUCTORA, NameStorageConstructora, NameStoragetoken, NameStorageUsuario, UserSessionModel } from '../model/AuthModel'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'


interface Props {
    children: JSX.Element | JSX.Element[]
}


export const AuthProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

    const updateSession = (data: AuthContextProps) => {
        
        dispatch({ type: 'addSession', payload: data });
    }





    return (
        <AuthContext.Provider value={{
            state,
            // Methods
            updateSession
        }}>
            {children}
        </AuthContext.Provider>
    )
}
