
import { AuthContextProps, INITIAL_STATE_CONSTRUCTORA, NameStorageConstructora, NameStoragetoken, NameStorageUsuario, UserSessionModel } from "..";
import { TypeLogin } from "../types/types";


type AuthActions = {
    type: TypeLogin, payload: AuthContextProps;
}


export const authReducer = (state: AuthContextProps, action: AuthActions): AuthContextProps => {

    switch (action.type) {
        case TypeLogin.GetSession:

            return {
                token: localStorage.getItem(NameStoragetoken) ?? '',
                user: (JSON.parse(localStorage.getItem(NameStorageUsuario)!) as UserSessionModel),
                constructora: (JSON.parse(localStorage.getItem(NameStorageConstructora) ?? JSON.stringify(INITIAL_STATE_CONSTRUCTORA)
                ))
            }

        case TypeLogin.AddSession:
            localStorage.setItem(NameStoragetoken, action.payload.token);
            localStorage.setItem(NameStorageUsuario, JSON.stringify(action.payload.user));

            return { ...state, constructora: (JSON.parse(localStorage.getItem(NameStorageConstructora) ?? JSON.stringify(INITIAL_STATE_CONSTRUCTORA))) };

        case TypeLogin.ChangeConstructora:

            localStorage.setItem(NameStorageConstructora, JSON.stringify(action.payload.constructora));

            return { ...state, constructora: action.payload.constructora };

        case TypeLogin.Logout:
            localStorage.removeItem(NameStoragetoken);
            localStorage.removeItem(NameStorageUsuario);
            localStorage.removeItem(NameStorageConstructora);
            return { ...state, constructora: state.constructora ?? INITIAL_STATE_CONSTRUCTORA };

        default:
            return state;
    }
}