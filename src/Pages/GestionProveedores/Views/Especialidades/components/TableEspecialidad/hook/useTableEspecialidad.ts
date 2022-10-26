import { useContext } from 'react';
import { EspecialidadContext } from "../../../store";




export const useTableEspecialdiad = () => {

    const { state } = useContext(EspecialidadContext);

    return {
        state
    }
}