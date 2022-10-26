import { RemoveCircleOutlineOutlined } from '@mui/icons-material'
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material'
import { useAgregarEspecialidad } from '../hook/useAgregarEspecialidad';

export const AgregarEspecialidad = () => {

    const { handleDelete, state } = useAgregarEspecialidad();
    
    return (
        <>
            <Box>
                <Typography variant='h6'>Especialidades agregadas</Typography>
            </Box><Box justifyContent={'start'} display={'flex'}

            >
                {/* <SinInformacion /> */}
                <List sx={{
                    width: '100%',
                   
                    overflow: 'auto',
                }}>

                    {

                        state.length == 0 ? null :
                            state.map(c => {
                                const texto = `${c.grupoTexto} / ${c.categoriaTexto} / ${c.nombre}`;

                                return (<>
                                    <ListItem sx={{ p: 0 }}>
                                        <ListItemButton sx={{ p: 0.5 }}>
                                            <ListItemText primary={texto} />
                                            <RemoveCircleOutlineOutlined sx={{pl:0.5}} color="primary" onClick={() => handleDelete(c.id)} />
                                            <Divider />
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider />
                                </>)
                            })
                    }
                </List>
            </Box>
        </>

    )
}
