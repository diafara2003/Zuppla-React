

import { useReducer } from 'react'
import { AuthContextProps, ConstructoraDTO, INITIAL_STATE, INITIAL_STATE_CONSTRUCTORA, NameStorageConstructora, NameStoragetoken, NameStorageUsuario, UserSessionModel } from '../model/AuthModel'
import { TypeLogin } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'



interface Props {
    children: JSX.Element | JSX.Element[]
}


export const AuthProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);


    const getSession = (): AuthContextProps => {
        return {
            token: localStorage.getItem(NameStoragetoken) ?? '',
            user: (JSON.parse(localStorage.getItem(NameStorageUsuario)!) as UserSessionModel),
            constructora: (JSON.parse(localStorage.getItem(NameStorageConstructora) ?? JSON.stringify(INITIAL_STATE_CONSTRUCTORA)
            ))
        }
    }

    const changeConstructora = (data: ConstructoraDTO) => {
        const action = {

            type: TypeLogin.ChangeConstructora,
            payload: { ...INITIAL_STATE, constructora: data }
        }

        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            state,
            // Methods
            getSession
        }}>
            {children}
        </AuthContext.Provider>
    )
}
