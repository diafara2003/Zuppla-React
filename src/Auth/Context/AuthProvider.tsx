

import { useReducer } from 'react'
import { AuthContextProps, INITIAL_STATE, UserSessionModel } from '../model/AuthModel'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'


interface Props {
    children: JSX.Element | JSX.Element[]
}


export const AuthProvider = ({ children }: Props) => {

    const [storeUsuario, dispatch] = useReducer(authReducer, INITIAL_STATE);

    const addSession = (data: AuthContextProps) => {

        dispatch({ type: 'addSession', payload: data });
    }


    const removeSession = () => {

        dispatch({ type: 'removeSession' });
    }
    const updateUser = (data: UserSessionModel) => {


        dispatch({ type: 'updateUser', payload: data });
    }


    return (
        <AuthContext.Provider value={{
            storeUsuario,
            // Methods
            addSession,
            removeSession,
            updateUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}
