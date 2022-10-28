
import { especialidadGrupoDTO } from '../../NuevaEspecialidad/model'
import { EspecialidadGrupo } from './EspecialidadGrupos';


type props = {
  data: especialidadGrupoDTO[],
  filter: string

}
interface Ifilter {
  grupo: number;
  categoria: number;
}
export const ContainerEspecialidad = ({ data, filter }: props) => {

  let info = [...data];
  const _value =filter.trimStart().trimEnd().toLowerCase();
  if (_value != "") {
    

    //filter general by especialidad
    const _where = data
      .filter(x => x.especialidad > 0 && x.texto.toLowerCase().includes(_value));

    let arrayfilter: Ifilter[] = [];
    _where.forEach(c => {

      arrayfilter.push({ grupo: c.grupo, categoria: c.categoria });
    });
    const uniqueGrupo = [...new Set(arrayfilter.map(item => item.grupo))];
    const uniqueCategoria = [...new Set(arrayfilter.map(item => item.categoria))]

    //push categoria filter
    uniqueGrupo.forEach(g => _where.push(data.find(c => c.grupo == g && c.categoria == 0)!));

    //push categoria filter
    uniqueCategoria.forEach(g => _where.push(data.find(c => c.categoria == g && c.especialidad == 0)!));

    info = _where;
  }


  return (
    <>
      {
        info.filter(c => c.categoria == 0).map(g => {
          const categorias = info.filter(c => c.grupo == g.grupo && c.categoria > 0);

          return <EspecialidadGrupo
            key={`grupo-${g.grupo}`}
            grupo={g}
            categorias={categorias} />
        })}
    </>
  )



}
