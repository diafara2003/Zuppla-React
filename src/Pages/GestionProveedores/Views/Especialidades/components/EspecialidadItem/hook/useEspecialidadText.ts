import { useContext, useEffect, useState } from "react";
import { EspecialidadContext } from "../../../store";
import { especialidadGrupoDTO } from "../../NuevaEspecialidad/model";

type props = {

    especialidad: especialidadGrupoDTO,
    grupoTexto: string;
    categoriaTexto: string
}

export const useEspecialidadText = ({ especialidad, categoriaTexto, grupoTexto }: props) => {

    const [checked, setChecked] = useState(false);
    const { dispatch, state } = useContext(EspecialidadContext);
    const [info, setInfo] = useState<especialidadGrupoDTO>({
        categoria: 0,
        especialidad: 0,
        grupo: 0,
        texto: ''
    });

    const handleCLick = (id: number) => {

        if (checked)
            dispatch({
                payload: id,
                type: 'remove'
            })
        else
            dispatch({
                payload: { categoriaTexto, grupoTexto, nombre: especialidad.texto, id: especialidad.especialidad },
                type: 'add'
            })
        setChecked(() => !checked);
    }

    useEffect(() => {

        if (state.length > 0) {

            const existeStore = state.find(c => c.id == especialidad.especialidad);

            if (existeStore != undefined && existeStore != null) setChecked(true);
        }


    }, []);

    useEffect(() => {

        setInfo(especialidad);

    }, [especialidad]);


    return {
        checked,
        handleCLick,
        info
    }
}