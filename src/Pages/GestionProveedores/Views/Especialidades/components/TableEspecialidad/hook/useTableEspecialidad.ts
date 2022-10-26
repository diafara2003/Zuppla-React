import { useContext, useLayoutEffect } from 'react';
import { EspecialidadContext } from "../../store";
import { EspecialidadDTO } from "../model/EspecialidadDTO";



export const useTableEspecialdiad = (data:EspecialidadDTO[])=>{

    const { dispatch,state } = useContext(EspecialidadContext);



    useLayoutEffect(() => {

        if (data != null && data.length > 0)
            dispatch({
                type: 'add all',
                payload: data
            });
    }, []);




    return {
        state
    }
}