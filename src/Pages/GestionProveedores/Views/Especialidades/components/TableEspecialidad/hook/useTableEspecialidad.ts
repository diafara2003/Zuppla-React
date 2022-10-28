import { TextFieldProps } from '@mui/material';
import { useContext, useLayoutEffect } from 'react';
import { EspecialidadContext } from "../../../store";
import { useState, useEffect } from 'react';


export const useTableEspecialdiad = (inputRef: string) => {


    const { state } = useContext(EspecialidadContext);
    const [data, setData] = useState(state);


    useEffect(() => {

        setData(() => state);

    }, [state]);


    useEffect(() => {

        const value = inputRef.toLowerCase();
        if (value == "") setData(state);
        else setData(state.filter(c =>
            c.categoriaTexto.toLowerCase().includes(value)
            || c.grupoTexto.toLowerCase().includes(value)
            || c.nombre.toLowerCase().includes(value)
        ))

    }, [inputRef]);


    return {
        data,


    }
}