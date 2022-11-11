
import { AuthContextProps, ConstructoraDTO, INITIAL_STATE, INITIAL_STATE_CONSTRUCTORA, NameStorageConstructora, NameStoragetoken, NameStorageUsuario, UserSessionModel } from "..";

type AuthActions =

    | { type: 'addSession', payload: AuthContextProps }
    | { type: 'removeSession' }
    | { type: 'getSession', payload: AuthContextProps }
    | { type: 'changeConstructora', payload: ConstructoraDTO }
    | { type: 'updateUser', payload: UserSessionModel }



export const authReducer = (state: AuthContextProps, action: AuthActions): AuthContextProps => {

    switch (action.type) {
        case 'getSession':

            return {
                token: localStorage.getItem(NameStoragetoken) ?? '',
                user: (JSON.parse(localStorage.getItem(NameStorageUsuario)!) as UserSessionModel),
                constructora: (JSON.parse(localStorage.getItem(NameStorageConstructora) ?? JSON.stringify(INITIAL_STATE_CONSTRUCTORA)
                ))
            }

        case 'addSession':
            localStorage.setItem(NameStoragetoken, action.payload.token);
            localStorage.setItem(NameStorageUsuario, JSON.stringify(action.payload.user));

            return {
                token: action.payload.token,
                user: action.payload.user,
                constructora: INITIAL_STATE_CONSTRUCTORA
            };

        case 'changeConstructora':

            localStorage.setItem(NameStorageConstructora, JSON.stringify(action.payload));

            return { ...state, constructora: action.payload };


        case 'updateUser':

            localStorage.setItem(NameStorageUsuario, JSON.stringify(action.payload));

            return { ...state, user: action.payload };

        case 'removeSession':
            localStorage.removeItem(NameStoragetoken);
            localStorage.removeItem(NameStorageUsuario);
            localStorage.removeItem(NameStorageConstructora);
            return INITIAL_STATE;

        default:
            return state;
    }
}