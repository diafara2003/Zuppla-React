import { useReducer } from "react";
import { APiMethod, requestAPI, useFetch } from "../../../../../Provider";
import { EspecialidadDTO } from "../components/TableEspecialidad";
import { EspecialidadContext, initialState, storeEspecialidad } from "../store";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const EspecialidadProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(storeEspecialidad, initialState);

    const addEspecialidad = (newData: EspecialidadDTO) => {
        requestAPI({
            metodo: `Especialidades/tercero`,
            type: APiMethod.POST,
            data: { id: newData.id }
        }).then(c => {
            dispatch({
                type: 'add',
                payload: newData
            });
        });
    }

    const deleteEspecialidad = (id: number) => {
        requestAPI({
            metodo: `Especialidades/tercero/${id}`,
            type: APiMethod.DELETE
        }).then(c => {
            dispatch({
                type: 'remove',
                payload: id
            });
        });
    }


    return (
        <EspecialidadContext.Provider value={
            {
                state: state.especialidades, dispatch: dispatch,
                addEspecialidad,
                deleteEspecialidad,

            }

        }>
            {children}
        </EspecialidadContext.Provider>
    )
}

