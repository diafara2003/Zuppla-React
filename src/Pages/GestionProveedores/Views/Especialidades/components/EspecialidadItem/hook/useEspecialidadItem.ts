import { useState } from "react"
import { especialidadGrupoDTO } from "../../NuevaEspecialidad/model/especialidadGrupoDTO"

type props = {
    data: especialidadGrupoDTO,
    handleSelected: (info: especialidadGrupoDTO, isSelected: boolean) => void,
    ischecked: boolean;
}

export const useEspecialidadItem = ({ data, handleSelected, ischecked }: props) => {

    const [checked, setChecked] = useState(ischecked);

    const handleCLick = () => {

        handleSelected(data, !checked);
        setChecked(() => !checked);
    }



    const styles = {
        Stylegrupo: { color:'#1B344C', fontWeight: 600, paddingBottom: '0' },
        Stylecategoria: { color: '#1E62A1', fontWeight: 500 },
        Styleespecialidad: { color: 'rgba(8, 21, 36, 0.87)' }
    }



    return {
        ...data,
        checked,
        handleCLick,


        ...styles
    }
}