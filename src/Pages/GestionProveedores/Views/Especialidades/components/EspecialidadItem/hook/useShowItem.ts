import { useState } from "react";
import { especialidadGrupoDTO } from "../../NuevaEspecialidad/model";

type props = {
    data: especialidadGrupoDTO[];
    handleClick: (id: number) => especialidadGrupoDTO[]
}

export const useShowItem = ({ data, handleClick }: props) => {

    const [show, SetShow] = useState(false);
    const [info, setInfo] = useState(data);

    const Handleclick = (id: number) => {
        SetShow(!show);
        if (show)
            setInfo(handleClick(id)
                //data.filter(c => c.grupo == id && c.especialidad == 0)
            )
    }

    return {

        show,
        info,
        Handleclick
    }
}
