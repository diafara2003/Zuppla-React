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
    const { addEspecialidad, deleteEspecialidad, state } = useContext(EspecialidadContext);
    const [info, setInfo] = useState<especialidadGrupoDTO>({
        categoria: 0,
        especialidad: 0,
        grupo: 0,
        texto: ''
    });

    const handleCLick = (id: number) => {

        if (checked) deleteEspecialidad(id);
        else
            addEspecialidad({ categoriaTexto, grupoTexto, nombre: info.texto, id: info.especialidad });

        setChecked(() => !checked);
    }

    useEffect(() => {

        const existeStore = state.find(c => c.id == info.especialidad);

        if (existeStore != undefined && existeStore != null) setChecked(true);
        else setChecked(false);



    }, [info, state]);


    useEffect(() => {

        setInfo(especialidad);

    }, [especialidad]);


    return {
        checked,
        handleCLick,
        info
    }
}