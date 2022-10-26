import { useContext, useEffect, useLayoutEffect } from 'react';
import { AuthContext } from '../../../../../../../Auth';
import { APiMethod, useFetch } from '../../../../../../../Provider';
import { EspecialidadContext } from "../../store";
import { EspecialidadDTO } from "../model/EspecialidadDTO";



export const useTableEspecialdiad = () => {

    const { dispatch, state } = useContext(EspecialidadContext);
    const { data, isLoading, doFetch } = useFetch<EspecialidadDTO[] | null>();

    const { storeUsuario } = useContext(AuthContext);

    useEffect(() => {

        if (data != null && data.length > 0)
            dispatch({
                type: 'add all',
                payload: data
            });
    }, [data]);


    useEffect(() => {


        doFetch({

            metodo: `Especialidades/tercero?id=${storeUsuario.user.idEmpresa}`,
            type: APiMethod.GET,
            AllowAnonymous: false
        });
    }, []);




    return {
        state, isLoading
    }
}