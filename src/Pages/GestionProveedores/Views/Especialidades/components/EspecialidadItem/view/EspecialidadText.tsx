
import { Checkbox, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { especialidadGrupoDTO } from '../../NuevaEspecialidad/model/especialidadGrupoDTO'
import { useEspecialidadText } from '../hook/useEspecialidadText';
import { useShowItem } from '../hook/useShowItem';


type props = {
    categoria: number
    especialidad: especialidadGrupoDTO


}

export const EspecialidadText = ({ categoria, especialidad }: props) => {

    const { texto } = especialidad;
    const { checked, handleCLick } = useEspecialidadText();
    return (
        <Box
            onClick={handleCLick}
            key={`cont-cat-${categoria}`}
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
                sx={{p:0.5}}
                color="primary" />
            <Typography sx={{ color: 'rgba(8, 21, 36, 0.87);' }}>{texto}</Typography>
        </Box>
    )
}
