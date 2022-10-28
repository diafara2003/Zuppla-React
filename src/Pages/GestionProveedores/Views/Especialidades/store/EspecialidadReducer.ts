
import { createContext } from 'react';
import { EspecialidadDTO } from '../components/TableEspecialidad';

export enum typeActionsEspecialidad {
    add,
    remove
}

export interface State {
    especialidades: EspecialidadDTO[];

};


export interface IContextModel {
    state: EspecialidadDTO[];
    dispatch: React.Dispatch<AuthActionsEspecialidad>;
}


export const initialState: State = {
    especialidades: []
};
type AuthActionsEspecialidad =

    | { type: 'add', payload: EspecialidadDTO }
    | { type: 'add all', payload: EspecialidadDTO[] }
    | { type: 'remove', payload: number }



export interface IEspecialidadContext {
    state: State, action: AuthActionsEspecialidad
}

export const storeEspecialidad = (state: State, action: AuthActionsEspecialidad): State => {

    switch (action.type) {


        case 'add all':

            return {
                especialidades: [...action.payload],
            };



        case 'add':
            return {
                especialidades: [
                    ...state.especialidades,
                    action.payload
                ],
            };
        case 'remove':
            return {
                especialidades: [...state.especialidades.filter((item) => item.id !== action.payload)],
            };
    }
}

export const EspecialidadContext = createContext({ state: [], dispatch: () => { } } as IContextModel);
