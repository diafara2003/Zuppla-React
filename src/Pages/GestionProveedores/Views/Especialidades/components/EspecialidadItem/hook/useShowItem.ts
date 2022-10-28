import { useState } from "react";
import { especialidadGrupoDTO } from "../../NuevaEspecialidad/model";
import { useEffect } from 'react';

type props = {
    item: especialidadGrupoDTO;
    data: especialidadGrupoDTO[];
    handleClick: (data: especialidadGrupoDTO[], id: number) => especialidadGrupoDTO[],
    id: number;
}

export const useShowItem = ({ data, handleClick, id, item }: props) => {

    const [show, SetShow] = useState(false);
    const [contextInfo, SetSetItem] = useState<especialidadGrupoDTO>({

        categoria: 0,
        especialidad: 0,
        grupo: 0,
        texto: ''
    });
    const [info, setInfo] = useState<especialidadGrupoDTO[]>([]);

    const Handleclick = () => {

        SetShow(() => !show);
        if (!show) setInfo(() => handleClick(info, id));
    }

    useEffect(() => {
        if (data.length > 0)
            setInfo(() => handleClick(data, id));

        SetSetItem(item);

    }, [data]);




    return {

        show,
        info,
        item:contextInfo,
        Handleclick
    }
}
