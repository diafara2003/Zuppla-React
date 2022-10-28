import { TextFieldProps } from "@mui/material";
import { useEffect,useState } from "react";
import { APiMethod, useFetch } from "../../../../../../../Provider";
import { especialidadGrupoDTO } from "../model/especialidadGrupoDTO";

export const useNuevaEspecialidad = (typing:React.RefObject<TextFieldProps>) => {

    const { data, isLoading, doFetch } = useFetch<especialidadGrupoDTO[] | null>();
const [filter,setFilter]= useState("");
    useEffect(() => {

        doFetch({
            metodo: 'Especialidad/todas',
            type: APiMethod.GET,
            AllowAnonymous: false
        });

    }, []);


    const handleChangeTyping = () => {
        
        console.log(typing.current?.value)

        setFilter((typing.current?.value as string));
    }

    return {

        especialidades: data ?? [],
        isLoading,
        handleChangeTyping,
        filter
    }
}