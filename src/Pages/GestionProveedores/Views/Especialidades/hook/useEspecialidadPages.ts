import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../../Auth";
import { APiMethod, useFetch } from "../../../../../Provider";


import { useState } from 'react';
import { EspecialidadDTO } from "../components/TableEspecialidad";


export const useEspecialidadPages = () => {

    const { data, isLoading, doFetch } = useFetch<EspecialidadDTO[] | null>();
    const { state } = useContext(AuthContext);
    
    const [openNew, setOpenDialog] = useState(false);

    useEffect(() => {


        doFetch({

            metodo: `Especialidades/tercero?id=${state.user.idEmpresa}`,
            type: APiMethod.GET,
            AllowAnonymous: false
        });
    }, []);


  
    const handleDialog = () => {
        setOpenDialog(() => !openNew);
    }




    return { isLoading, data, handleDialog, openNew }

}

export default useEspecialidadPages;