import { useContext, useEffect } from "react";
import { EspecialidadContext } from "../../store";

export const useAgregarEspecialidad = () => {

    const { state, dispatch } = useContext(EspecialidadContext);

    const handleDelete = (id: number) => {
        dispatch(
            {
                type: 'remove', payload: id
            }
        );
    }


    return {

        state,
        handleDelete,

    }
}