import { ChevronRightOutlined, ExpandMoreOutlined } from "@mui/icons-material"
import Collapse from '@mui/material/Collapse';
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { especialidadGrupoDTO } from "../../NuevaEspecialidad/model"
import { useShowItem } from "../hook"
import { EspecialidadText } from "./EspecialidadText"

type props = {
    grupo: especialidadGrupoDTO;
    categoria: especialidadGrupoDTO,
    especialidades: especialidadGrupoDTO[],

}

export const EspecialidadCategoria = ({  categoria, especialidades }: props) => {

    const _filter = (data: especialidadGrupoDTO[], id: number) => {

        return data.filter(c => c.categoria == id && c.especialidad > 0);
    }

  
    const { Handleclick, show, info,item } = useShowItem({ data: especialidades, handleClick: _filter, id: categoria.categoria ,item:categoria});

    return (

        <Box >
            <Box
                onClick={Handleclick}
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

                <Typography sx={{ color: '#1E62A1', fontWeight: 500 }}>{item.texto}</Typography>
            </Box>

            <Collapse in={show}>
                {show && info.length > 0
                    ?

                    info.map((e, i) =>
                        <EspecialidadText
                            key={`espe-espe-${e.especialidad}-index-${i}`}
                            categoria={{ id: e.categoria, texto: e.texto }}
                            grupo={{ id: item.grupo, texto: item.texto }}
                            especialidad={e} />)

                    : null
                }
            </Collapse>


        </Box>


    )
}


