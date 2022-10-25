import { Box } from '@mui/material'
import { especialidadGrupoDTO } from '../../NuevaEspecialidad/model/especialidadGrupoDTO'
import { EspecialidadGrupo } from './EspecialidadGrupos';


type props = {
  data: especialidadGrupoDTO[],

}

export const ContainerEspecialidad = ({ data }: props) => {

  return (
    <Box>
      {
        data.filter(c => c.categoria == 0).map(g => {
          const categorias = data.filter(c => c.grupo == g.grupo && c.categoria > 0);

          return <EspecialidadGrupo
            key={`grupo-${g.grupo}`}
            grupo={g}
            categorias={categorias} />
        })}
    </Box>
  )



}
