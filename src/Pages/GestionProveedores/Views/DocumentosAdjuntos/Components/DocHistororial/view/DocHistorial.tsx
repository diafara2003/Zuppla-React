
import { Grid, Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography, Tooltip, Button } from '@mui/material'
import { HistorialComponent, TiposAuditoria } from '../../../../../../../SharedComponents/Historial';
import { useDocHistorial } from '../hook/useDocHistorial';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
type props = {
    onClose: (estado: boolean) => void
}
export const DocHistorial = ({ onClose }: props) => {

    const { state, handleSelected, tipoDocSelected } = useDocHistorial();

    const cerrarHistorial = () => {
        onClose(false);
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Box pt={1}>
                <Grid container spacing={3} pl={1} >
                    <Grid item xl={3} lg={3}  >
                        <Button variant="text" onClick={cerrarHistorial}> <ExitToAppIcon sx={{ mr: "8px" }} />Volver</Button>
                        <List sx={{borderRight:'1px solid #ededed'}}>
                            {
                                state.map(c => {
                                    let _title = c.nombre.split('(')[0]
                                    return (<Box key={`list-${c.id}`}>
                                        <ListItem sx={{ p: 0, borderLeft: "1px solid #e9e9e9", borderTop: "1px solid #e9e9e9", borderbo: "1px solid #e9e9e9" }}  >
                                            <Tooltip title={c.nombre}>
                                                <ListItemButton sx={{ p: 0.5 }}
                                                    selected={tipoDocSelected == c.id}
                                                    onClick={() => { handleSelected(c.id); }}
                                                >
                                                    <ListItemText>
                                                        <Typography noWrap> {_title}</Typography>
                                                    </ListItemText>

                                                </ListItemButton>
                                            </Tooltip>
                                        </ListItem>

                                    </Box>
                                    )
                                })
                            }
                        </List>
                    </Grid>
                    <Grid item xl={9} lg={9}  >
                        <Box>
                            {tipoDocSelected == 0
                                ? null
                                :
                                <HistorialComponent
                                    _tipoAuditoria={TiposAuditoria.DocumentosInformacionGeneral}
                                    idDocumento={tipoDocSelected}
                                    onClose={(estado) => {
                                        cerrarHistorial()
                                    }}
                                />
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
