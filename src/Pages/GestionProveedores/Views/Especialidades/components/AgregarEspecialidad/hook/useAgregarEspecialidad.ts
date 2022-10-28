import { useContext, useEffect } from "react";
import { EspecialidadContext } from "../../../store";

export const useAgregarEspecialidad = () => {

    const { state, deleteEspecialidad } = useContext(EspecialidadContext);

 


    return {

        state,
        deleteEspecialidad,

    }
}