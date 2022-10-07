import { useEffect } from "react";
import { APiMethod, useFetch } from "../../../../../../../Provider";
import { especialidadGrupoDTO } from "../model/especialidadGrupoDTO";

export const useNuevaEspecialidad = () => {

    const { data, isLoading, doFetch } = useFetch<especialidadGrupoDTO[] | null>();

    useEffect(() => {

        doFetch({
            metodo: 'Especialidad/todas',
            type: APiMethod.GET,
            AllowAnonymous: false
        });

    }, []);


    return {

        especialidades: data ?? [],
        isLoading
    }
}