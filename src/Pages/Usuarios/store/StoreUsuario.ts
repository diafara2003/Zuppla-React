import { createContext } from "react";
import { UsuariosDTO } from "../Views/usuario/model/usuarioDTO";

export interface StateUsuario {
    usuarios: UsuariosDTO[];

};


export interface IContextUserModel {
    state: UsuariosDTO[];
    dispatch: React.Dispatch<AuthActionsUser>;
    isloading: boolean;
    newUser: (user: UsuariosDTO) => void
}


type AuthActionsUser =

    | { type: 'add', payload: UsuariosDTO }
    | { type: 'edit', payload: UsuariosDTO }
    | { type: 'add all', payload: UsuariosDTO[] }
    | { type: 'remove', payload: number }
    | { type: 'cambia estado', payload: { _id: number, estado: number } }


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
            //state.usuarios.push(action.payload);

            return {
                usuarios: [
                    ...state.usuarios,
                    action.payload
                ],
            };


        case 'edit':
            //state.usuarios.push(action.payload);

            return {
                usuarios: [...state.usuarios.map(c => {
                    const _user = c;

                    if (_user.id == action.payload.id)
                        return action.payload
                    else
                        return _user;
                })]
            }


        case 'remove':
            return {
                usuarios: [...state.usuarios.filter((item) => item.id !== action.payload)],
            };

        case 'cambia estado':
            return {
                usuarios: [...state.usuarios.map(c => {
                    const _user = c;

                    if (_user.id == action.payload._id)
                        _user.estado = action.payload.estado;

                    return _user;
                })]
            }
    }
}


export const UserContext = createContext({ newUser: (data: UsuariosDTO) => { }, isloading: false, state: [], dispatch: () => { } } as IContextUserModel);
