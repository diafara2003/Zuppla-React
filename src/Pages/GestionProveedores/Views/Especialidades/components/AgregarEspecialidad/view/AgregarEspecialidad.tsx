import { RemoveCircleOutlineOutlined } from '@mui/icons-material'
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material'
import React from 'react'

export const AgregarEspecialidad = () => {
    return (
        <>
            <Box>
                <Typography variant='h6'>Especialidades agregadas</Typography>
            </Box><Box justifyContent={'start'} display={'flex'}

            >
                {/* <SinInformacion /> */}
                <List sx={{
                    width: '100%',
                    maxHeight: 300,
                    overflow: 'auto',
                }}>
                    <ListItem sx={{ p: 0 }}>
                        <ListItemButton sx={{ p: 0.5 }}>
                            <ListItemText primary="Dibujante" />
                            <RemoveCircleOutlineOutlined color="primary" />
                            <Divider />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </List>
            </Box>
        </>

    )
}
