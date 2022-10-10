import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../../Auth";
import { APiMethod, useFetch } from "../../../../../Provider";


import { useState } from 'react';

export const useTableEspecialidad = () => {

    const { data, isLoading, doFetch } = useFetch<EspecialidadDTO[] | null>();
    const { state } = useContext(AuthContext);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {


        doFetch({

            metodo: `Especialidades/tercero?id=${state.user.idEmpresa}`,
            type: APiMethod.GET,
            AllowAnonymous: false
        });
    }, []);


    const handleEspecialidad = () => {
        setOpenDialog(true);
    }


    return { isLoading, data, handleEspecialidad, openDialog ,setOpenDialog}

}

export default useTableEspecialidad;