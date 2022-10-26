import { useReducer } from "react";
import { EspecialidadContext, initialState, storeEspecialidad } from "../store";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const EspecialidadProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(storeEspecialidad, initialState);


    return (
        <EspecialidadContext.Provider value={{ state: state.especialidades, dispatch: dispatch }}>
            {children}
        </EspecialidadContext.Provider>
    )
}
