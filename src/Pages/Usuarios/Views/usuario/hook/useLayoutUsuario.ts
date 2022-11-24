import { useContext, useEffect, useState } from "react";
import { APiMethod, useFetch } from "../../../../../Provider";
import { UsuariosDTO } from "../model/usuarioDTO";
import { UserContext } from "../store/StoreUsuario";

export const useLayoutUsuario = () => {

    const { hasError, data, isLoading, doFetch, setState } = useFetch<UsuariosDTO[] | null>();
    const { dispatch, state } = useContext(UserContext);
    const [dataClon, setDataClon] = useState<UsuariosDTO[] | null>()

    useEffect(() => {
        doFetch({
            metodo: "Usuario?tipo=p",
            type: APiMethod.GET,
            AllowAnonymous: false
        });
    }, []);


    useEffect(() => {

        if (data != null && data.length > 0)
            dispatch({
                type: "add all",
                payload: data
            });

    }, [data]);

    return {

        state,
        isLoading
    }
}