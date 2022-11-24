
import { Grid, Box, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { HistorialComponent, TiposAuditoria } from '../../../../../../../SharedComponents/Historial';
import { useDocHistorial } from '../hook/useDocHistorial';


export const DocHistorial = () => {

    const { state, handleSelected, tipoDocSelected } = useDocHistorial();

    return (
        <Box sx={{ width: '100%' }}>
            <Box pt={1}>
                <Grid container spacing={3}>
                    <Grid item xl={4} lg={4}  >

                        <List sx={{


                        }}>

                            {
                                state.map(c => {

                                    return (<Box key={`list-${c.id}`}>
                                        <ListItem sx={{ p: 0 }} >
                                            <ListItemButton sx={{ p: 0.5 }}
                                                selected={tipoDocSelected== c.id}
                                                onClick={() => { handleSelected(c.id); }}
                                            >
                                                <ListItemText primary={`${c.nombre}`} />
                                                <Divider />
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider />
                                    </Box>
                                    )
                                })
                            }

                        </List>

                    </Grid>
                    <Grid item xl={8} lg={8}  >
                        <Box>
                            {tipoDocSelected == 0
                                ? null
                                :
                                <HistorialComponent
                                    _tipoAuditoria={TiposAuditoria.DocumentosInformacionGeneral}
                                    idDocumento={tipoDocSelected}
                                    onClose={(estado) => {

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
