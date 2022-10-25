import { Add, CheckBox, ChevronRightOutlined, ExpandMoreOutlined, RemoveOutlined, ShowChart } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { especialidadGrupoDTO } from "../../NuevaEspecialidad/model/especialidadGrupoDTO"
import { useShowItem } from "../hook/useShowItem"
import { EspecialidadCategoria } from './EspecialidadCategoria';

type props = {
    grupo: especialidadGrupoDTO,
    categorias: especialidadGrupoDTO[],

}

export const EspecialidadGrupo = ({ grupo, categorias }: props) => {


    const { clickGrupo, show, info } = useShowItem(categorias);

    return (
        <Box key={`con-grupo-${grupo.grupo}`}>
            <Box display={"flex"} p={0.5} key={`flex-grupo-${grupo.grupo}`}
                onClick={() => clickGrupo(grupo.grupo)}
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

                <Typography sx={{ color: '#1B344C', fontWeight: 600, paddingBottom: '0' }}>{grupo.texto}</Typography>
            </Box>
            {show && info.length > 0
                ?
                info.map((c, i) =>
                    <EspecialidadCategoria
                        key={`espe-cat-${c.categoria}-index-${i}`}
                        categoria={c}
                        grupo={grupo.grupo}
                        especialidades={categorias.filter(e => e.grupo == grupo.grupo
                            && e.categoria == c.categoria
                            && e.especialidad > 0
                        )} />)
                : null
            }
        </Box>
    )
}


