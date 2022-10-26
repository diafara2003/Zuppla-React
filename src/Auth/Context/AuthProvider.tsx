

import { useReducer } from 'react'
import { AuthContextProps, ConstructoraDTO, INITIAL_STATE, INITIAL_STATE_CONSTRUCTORA, NameStorageConstructora, NameStoragetoken, NameStorageUsuario, UserSessionModel } from '../model/AuthModel'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'


interface Props {
    children: JSX.Element | JSX.Element[]
}


export const AuthProvider = ({ children }: Props) => {

    const [storeUsuario, dispatch] = useReducer(authReducer, INITIAL_STATE);

    const updateSession = (data: AuthContextProps) => {
        
        dispatch({ type: 'addSession', payload: data });
    }


    const removeSession = () => {
        
        dispatch({ type: 'removeSession' });
    }



    return (
        <AuthContext.Provider value={{
            storeUsuario,
            // Methods
            updateSession,
            removeSession
        }}>
            {children}
        </AuthContext.Provider>
    )
}
