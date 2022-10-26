import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../../Auth";
import { APiMethod, useFetch } from "../../../../../Provider";


import { useState } from 'react';
import { EspecialidadDTO } from "../components/TableEspecialidad";
import { EspecialidadContext } from "../store";


export const useEspecilidadContainer = () => {



    const [openNew, setOpenDialog] = useState(false);
    const { data, isLoading, doFetch } = useFetch<EspecialidadDTO[] | null>();
    const { dispatch } = useContext(EspecialidadContext);
    const { storeUsuario } = useContext(AuthContext);

    useEffect(() => {

        if (data != null) {
            dispatch({
                type: 'add all',
                payload: data
            });
        }
    }, [data]);


    useEffect(() => {


        doFetch({

            metodo: `Especialidades/tercero?id=${storeUsuario.user.idEmpresa}`,
            type: APiMethod.GET,
            AllowAnonymous: false
        });
    }, []);

    const handleDialog = () => {
        setOpenDialog(() => !openNew);
    }




    return { handleDialog, openNew, isLoading }

}
