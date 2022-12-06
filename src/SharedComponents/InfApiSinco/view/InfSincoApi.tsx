
import { Box, Paper, Table, TableContainer, TablePagination } from '@mui/material'
import { ApiSincoHeader } from '../Components/headerApiSinco/view/ApiSincoHeader'
import { TipoInformeApiSincoDTO } from '../model/modelInfAPiSinco';
import { useInformeAPiSinco } from '../hook/useInformeAPiSinco';
import { ApiSincoBody } from '../Components/bodyApiSinco/view/ApiSincoBody';
import { SkeletonDinamic } from '../../Skeleton/view/SkeletonDynamic';
import { useState } from 'react';


type props = {
    tipo: TipoInformeApiSincoDTO
}

export const InfSincoApi = ({ tipo }: props) => {

    const { state, loading, handleChangePage, handleChangeRowsPerPage, page, rowsPerPage } = useInformeAPiSinco(tipo);

    return (
        <Paper elevation={2} sx={{ width: '100%', overflow: 'hidden' }}>
            {loading
                ? <SkeletonDinamic Tipo='table' NoColumnas={6} NoFilas={5} />
                :
                <>
                    <TableContainer sx={{ maxHeight: 'calc(100vh - 14rem)' }}>
                        <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <ApiSincoHeader columnas={state.encabezado} />
                            {state.detalles.length == 0 ? null : <ApiSincoBody page={page} rowPerPage={rowsPerPage} columnas={state.encabezado} datos={state.detalles} />}
                        </Table>
                    </TableContainer>
                    <TablePagination
                        labelRowsPerPage={"Registros por pagina"}
                        rowsPerPageOptions={[100, 200, 500]}
                        component="div"
                        count={state.detalles.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </>
            }

        </Paper>
    )
}
