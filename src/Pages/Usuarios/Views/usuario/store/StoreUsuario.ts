import { createContext } from "react";
import { UsuariosDTO } from "../model/usuarioDTO";

export interface StateUsuario {
    usuarios: UsuariosDTO[];

};


export interface IContextUserModel {
    state: UsuariosDTO[];
    dispatch: React.Dispatch<AuthActionsUser>;
}


type AuthActionsUser =

    | { type: 'add', payload: UsuariosDTO }
    | { type: 'add all', payload: UsuariosDTO[] }
    | { type: 'remove', payload: number }


export interface IUserContext {
    state: StateUsuario, action: AuthActionsUser
}
export const storeUser = (state: StateUsuario, action: AuthActionsUser): StateUsuario => {


    switch (action.type) {


        case 'add all':

            return {
                usuarios: [...action.payload],
            };
        case 'add':
            return {
                usuarios: [
                    ...state.usuarios,
                    action.payload
                ],
            };

        case 'remove':
            return {
                usuarios: [...state.usuarios.filter((item) => item.id !== action.payload)],
            };

    }
}


export const UserContext = createContext({ state: [], dispatch: () => { } } as IContextUserModel);
