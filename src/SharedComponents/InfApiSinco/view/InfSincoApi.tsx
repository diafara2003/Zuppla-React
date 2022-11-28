
import { Paper, Table, TableContainer } from '@mui/material'
import { ApiSincoHeader } from '../Components/view/ApiSincoHeader'
import { TipoInformeApiSincoDTO } from '../model/modelInfAPiSinco';
import { useInformeAPiSinco } from '../hook/useInformeAPiSinco';


type props={
    tipo: TipoInformeApiSincoDTO
}

export const InfSincoApi = ({tipo}:props) => {

    const { state } = useInformeAPiSinco(tipo);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <ApiSincoHeader columnas={state.encabezado} />
                </Table>
            </TableContainer>
        </Paper>
    )
}
