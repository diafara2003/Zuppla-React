import { useState } from "react";
import { especialidadGrupoDTO } from "../../NuevaEspecialidad/model/especialidadGrupoDTO";

export const useShowItem = (data: especialidadGrupoDTO[] = []) => {

    const [show, SetShow] = useState(false);
    const [info, setInfo] = useState(data);

    const clickGrupo = (grupo: number) => {
        SetShow(!show);
        setInfo(data.filter(c => c.grupo == grupo && c.especialidad == 0))
    }

    const clickCategoria = (categoria: number) => {
        SetShow(!show);
        setInfo(data.filter(c => c.categoria == categoria && c.especialidad > 0))
    }
    return {

        show,
        info,
        clickCategoria,
        clickGrupo
    }
}
