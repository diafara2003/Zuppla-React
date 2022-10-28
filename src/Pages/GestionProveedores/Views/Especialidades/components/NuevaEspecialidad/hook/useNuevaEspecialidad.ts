import { TextFieldProps } from "@mui/material";
import { useEffect, useState } from "react";
import { APiMethod, useFetch } from "../../../../../../../Provider";
import { especialidadGrupoDTO } from "../model/especialidadGrupoDTO";

export const useNuevaEspecialidad = (typing: React.RefObject<TextFieldProps>) => {

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
        isLoading,

    }
}