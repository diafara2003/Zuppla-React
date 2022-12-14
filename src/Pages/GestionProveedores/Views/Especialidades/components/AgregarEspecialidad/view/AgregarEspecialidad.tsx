import { RemoveCircleOutlineOutlined } from '@mui/icons-material'
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material'
import { SinInformacion } from '../../../../../Components/ImgComponents/View/SinInformacion';
import { useAgregarEspecialidad } from '../hook/useAgregarEspecialidad';
import { TransitionGroup } from 'react-transition-group';
import Collapse from '@mui/material/Collapse';

export const AgregarEspecialidad = () => {

    const { deleteEspecialidad, state } = useAgregarEspecialidad();

    return (
        <>
            <Box>
                <Typography variant='h6'>Especialidades agregadas</Typography>
            </Box>
            <Box justifyContent={'start'} display={'flex'}>

                <List sx={{
                    width: '100%',
                    height: 'calc(100vh - 331px)',
                    overflow: 'auto',
                }}>
                    <TransitionGroup>
                        {

                           state.map(c => {
                                    const texto = `${c.grupoTexto} / ${c.categoriaTexto} / ${c.nombre}`;

                                    return (<Collapse key={`collapse-${c.id}`}>
                                        <ListItem sx={{ p: 0 }}>
                                            <ListItemButton sx={{ p: 0.5 }}>
                                                <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
                                                    <div>
                                                        <Typography sx={{ color: 'rgba(8, 21, 36, 0.87);', fontSize: 12 }} variant="body2">{texto}</Typography>
                                                    </div>
                                                    <div>
                                                        <RemoveCircleOutlineOutlined sx={{ pl: 0.5 }} color="primary" onClick={() => deleteEspecialidad(c.id)} />
                                                    </div>
                                                </Box>

                                                <Divider />
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider />
                                    </Collapse>)
                                })
                        }
                    </TransitionGroup>
                </List>
            </Box>
        </>

    )
}
