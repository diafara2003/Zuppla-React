import { useContext, useState } from "react";
import { EspecialidadContext } from "../../store";
import { especialidadGrupoDTO } from "../../NuevaEspecialidad/model";

type props = {

    especialidad: especialidadGrupoDTO,
    grupoTexto: string;
    categoriaTexto: string
}

export const useEspecialidadText = ({ especialidad, categoriaTexto, grupoTexto }: props) => {

    const [checked, setChecked] = useState(false);
    const { dispatch, state } = useContext(EspecialidadContext);

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



    return {
        checked,
        handleCLick,
        ...especialidad
    }
}