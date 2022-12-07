
import { Box, Paper, Table, TableContainer, TablePagination } from '@mui/material'
import { ApiSincoHeader } from '../Components/headerApiSinco/view/ApiSincoHeader'
import { RequestAPiSincoDTO, TipoInformeApiSincoDTO } from '../model/modelInfAPiSinco';
import { useInformeAPiSinco } from '../hook/useInformeAPiSinco';
import { ApiSincoBody } from '../Components/bodyApiSinco/view/ApiSincoBody';
import { SkeletonDinamic } from '../../Skeleton/view/SkeletonDynamic';
import { useState } from 'react';


type props = {
    filtros: RequestAPiSincoDTO
}

export const InfSincoApi = ({ filtros }: props) => {

    const { state, loading, handleChangePage, handleChangeRowsPerPage, page, rowsPerPage } = useInformeAPiSinco(filtros);

    return (
        <Paper elevation={2} sx={{ width: '100%', overflow: 'hidden' }}>
            {loading
                ? <Box p={2}>
                    <SkeletonDinamic Tipo='table' NoColumnas={6} NoFilas={5} />
                </Box>

                :
                <>
                    <TableContainer sx={{ maxHeight: 'calc(100vh - 17rem)' }}>
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
