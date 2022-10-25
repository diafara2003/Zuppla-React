import { Add, CheckBox, ChevronRightOutlined, ExpandMoreOutlined, RemoveOutlined, ShowChart } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { especialidadGrupoDTO } from "../../NuevaEspecialidad/model/especialidadGrupoDTO"
import { useShowItem } from "../hook/useShowItem"
import { EspecialidadText } from "./EspecialidadText"

type props = {
    grupo: number;
    categoria: especialidadGrupoDTO,
    especialidades: especialidadGrupoDTO[],

}

export const EspecialidadCategoria = ({ grupo, categoria, especialidades }: props) => {


    const { texto } = categoria;
    const { clickCategoria, show, info } = useShowItem(especialidades);

    return (

        <Box >
            <Box
                onClick={() => clickCategoria(categoria.categoria)}
                display={"flex"}
                pl={2.5}
                pt={0.5}
                sx={{
                    "&:hover": {
                        backgroundColor: "#D4E4F1",
                        cursor: "pointer",
                    },
                }}>

                {show
                    ? <ExpandMoreOutlined color="primary" />
                    : <ChevronRightOutlined color="primary" />
                }

                <Typography sx={{ color: '#1E62A1', fontWeight: 500 }}>{texto}</Typography>
            </Box>
            {show && info.length > 0
                ?
                info.map((e, i) =>
                    <EspecialidadText
                        key={`espe-espe-${e.especialidad}-index-${i}`}
                        categoria={e.categoria}
                        especialidad={e} />)
                : null
            }
        </Box>


    )
}


