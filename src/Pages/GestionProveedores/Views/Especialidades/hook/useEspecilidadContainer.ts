import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../../Auth";
import { APiMethod, useFetch } from "../../../../../Provider";
import { useState } from 'react';
import { EspecialidadDTO } from "../components/TableEspecialidad";
import { EspecialidadContext } from "../store";
import useRef from 'react';
import { TextFieldProps } from "@mui/material";


export const useEspecilidadContainer = (typing:React.RefObject<TextFieldProps>) => {

    const [openNew, setOpenDialog] = useState(false);
    const [inputfilter, setinputfilter] = useState("");
    const { data, doFetch } = useFetch<EspecialidadDTO[] | null>();
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

    const handleChangeTyping = () => {
        
        console.log(typing.current?.value)

        setinputfilter((typing.current?.value as string));
    }



    return { handleDialog, openNew, handleChangeTyping,inputfilter }

}
