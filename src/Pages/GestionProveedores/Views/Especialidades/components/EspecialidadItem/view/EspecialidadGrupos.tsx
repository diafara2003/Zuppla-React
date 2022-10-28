import { Add, CheckBox, ChevronRightOutlined, ExpandMoreOutlined, RemoveOutlined, ShowChart } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { especialidadGrupoDTO } from "../../NuevaEspecialidad/model"
import { useShowItem } from "../hook"
import { EspecialidadCategoria } from './EspecialidadCategoria';
import Collapse from '@mui/material/Collapse';
type props = {
    grupo: especialidadGrupoDTO,
    categorias: especialidadGrupoDTO[],

}

export const EspecialidadGrupo = ({ grupo, categorias }: props) => {

    const _filter = (data: especialidadGrupoDTO[], id: number) => {
        
        return data.filter(c => c.grupo == id && c.especialidad == 0);
    }

    const { Handleclick, show, info,item} = useShowItem({ data: categorias, handleClick: _filter, id: grupo.grupo ,item:grupo});

    return (
        <Box key={`con-grupo-${item.grupo}`}>
            <Box display={"flex"} p={0.5} key={`flex-grupo-${item.grupo}`}
                onClick={Handleclick}
                sx={{
                    "&:hover": {
                        backgroundColor: "#D4E4F1",
                        cursor: "pointer",
                    },

                }}>
                {show
                    ? <RemoveOutlined color="primary" />
                    : <Add color="primary" />
                }

                <Typography sx={{ color: '#1B344C', fontWeight: 600, paddingBottom: '0' }}>{item.texto}</Typography>
            </Box>
            <Collapse in={show}>
                {show && info.length > 0
                    ?
                    info.map((c, i) =>
                        <EspecialidadCategoria
                            key={`espe-cat-${c.categoria}-index-${i}`}
                            categoria={c}
                            grupo={item}
                            especialidades={categorias.filter(e => e.grupo == item.grupo
                                && e.categoria == c.categoria
                                && e.especialidad > 0
                            )} />)
                    : null
                }
            </Collapse>
        </Box>
    )
}


