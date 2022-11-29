
import { Paper, Table, TableContainer } from '@mui/material'
import { ApiSincoHeader } from '../Components/headerApiSinco/view/ApiSincoHeader'
import { TipoInformeApiSincoDTO } from '../model/modelInfAPiSinco';
import { useInformeAPiSinco } from '../hook/useInformeAPiSinco';
import { ApiSincoBody } from '../Components/bodyApiSinco/view/ApiSincoBody';
import { SkeletonDinamic } from '../../Skeleton/view/SkeletonDynamic';


type props = {
    tipo: TipoInformeApiSincoDTO
}

export const InfSincoApi = ({ tipo }: props) => {

    const { state, loading } = useInformeAPiSinco(tipo);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>

            {loading
                ? <SkeletonDinamic Tipo='table' NoColumnas={6} NoFilas={5}/>
                : <TableContainer sx={{ maxHeight: 440 }}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <ApiSincoHeader columnas={state.encabezado} />
                        {state.detalles.length == 0 ? null : <ApiSincoBody columnas={state.encabezado} datos={state.detalles} />}

                    </Table>
                </TableContainer>
            }

        </Paper>
    )
}
