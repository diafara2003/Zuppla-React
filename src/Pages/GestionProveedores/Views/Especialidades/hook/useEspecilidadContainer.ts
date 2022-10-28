import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../../Auth";
import { APiMethod, useFetch } from "../../../../../Provider";
import { useState } from 'react';
import { EspecialidadDTO } from "../components/TableEspecialidad";
import { EspecialidadContext } from "../store";
import useRef from 'react';
import { TextFieldProps } from "@mui/material";

type filterType = "table" | "new";
export const useEspecilidadContainer = (typing: React.RefObject<TextFieldProps>) => {

    const [openNew, setOpenDialog] = useState(false);
    const [inputfilter, setinputfilter] = useState({

        filterTable: '',
        filterNew: ''
    });

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

    const handleChangeTyping = (name: filterType) => {

        const _value = (typing.current?.value as string);

        setinputfilter({
            filterNew: name == "new" ? _value : inputfilter.filterNew,
            filterTable: name == "table" ? _value : inputfilter.filterTable
        });
    }



    return { handleDialog, openNew, handleChangeTyping, inputfilter }

}
