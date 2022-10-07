import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../../Auth";
import { APiMethod, useFetch } from "../../../../../Provider";

import { EspecialidadDTO } from "../components/TableEspecialidad/model/EspecialidadDTO";

export const useTableEspecialidad = () => {

    const { data, isLoading, doFetch } = useFetch<EspecialidadDTO[] | null>();
    const { state } = useContext(AuthContext);

    useEffect(() => {


        doFetch({

            metodo: `Especialidades/tercero?id=${state.user.idEmpresa}`,
            type: APiMethod.GET,
            AllowAnonymous: false
        });
    }, []);


    return { isLoading, data }

}