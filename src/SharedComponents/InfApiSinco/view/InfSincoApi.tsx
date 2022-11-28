
import { Paper, Table, TableContainer } from '@mui/material'
import { ApiSincoHeader } from '../Components/view/ApiSincoHeader'

export const InfSincoApi = () => {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <ApiSincoHeader />
                </Table>
            </TableContainer>
        </Paper>
    )
}
