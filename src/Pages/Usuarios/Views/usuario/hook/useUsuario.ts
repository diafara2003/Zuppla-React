import { useEffect } from "react";
import { APiMethod } from "../../../../../Provider/model/FetchModel";
import { useFetch } from "../../../../../Provider/useFech";
import { UsuariosDTO } from "../model/usuarioDTO";

export const useUsuario = () => {

    const { hasError, data, isLoading, doFetch } = useFetch<UsuariosDTO[] | null>();


    useEffect(() => {


        doFetch({

            metodo: "Usuario?tipo=p",
            type: APiMethod.GET,
            AllowAnonymous: false
        });
    }, []);


    return { isLoading, data }

}