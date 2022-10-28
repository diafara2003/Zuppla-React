
import { Checkbox, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { especialidadGrupoDTO } from '../../NuevaEspecialidad/model'
import { useEspecialidadText } from '../hook';

type especialidadType = {
    id: number, texto: string
}

type props = {
    grupo: especialidadType
    categoria: especialidadType
    especialidad: especialidadGrupoDTO


}

export const EspecialidadText = ({ categoria, especialidad, grupo }: props) => {


    const { checked, handleCLick,info} = useEspecialidadText({ especialidad, categoriaTexto: categoria.texto, grupoTexto: grupo.texto });

    return (
        <Box
            onClick={() => handleCLick(info.especialidad)}
            key={`cont-cat-${info.categoria}`}
            display={"flex"}
            alignItems={"center"}
            pl={5.5}
            sx={{
                "&:hover": {
                    backgroundColor: "#D4E4F1",
                    cursor: "pointer",
                },
            }}
        >
            <Checkbox
                checked={checked}
                sx={{ p: 0.5 }}
                color="primary" />
            <Typography sx={{ color: 'rgba(8, 21, 36, 0.87);' }}>{info.texto}</Typography>
        </Box>
    )
}
