import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Badge, TextField, InputAdornment, Typography, Paper } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useState } from 'react'
import { useSelectConstuctora } from '../Hook/useSelectConstuctora';
import { SkeletonDinamic } from '../../../../../SharedComponents/Skeleton/view/SkeletonDynamic';

export const SelectConstructora = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const { dataConst, isLoading } = useSelectConstuctora();
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (

        <Box ml={1}  >
            {
                isLoading ?
                    <>
                        <SkeletonDinamic NoColumnas={1} NoFilas={4} Tipo={'formulario'} />
                    </>
                    :
                    <>
                        <TextField sx={{ marginBottom: '1rem' }}
                            id="filled-basic"
                            label="Buscar"
                            variant="outlined"
                            size='small'
                            fullWidth
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><SearchOutlinedIcon /></InputAdornment>,
                            }}
                        />
                        <Divider />
                        <List component="nav" aria-label="main mailbox folders">
                            {
                                dataConst.length != 0
                                    ?
                                    dataConst.map(({ contNotificaciones, nombreConst, id }, index) => {
                                        return (
                                            <ListItemButton
                                                selected={selectedIndex === index}
                                                onClick={(event) => handleListItemClick(event, index)}
                                            >
                                                <ListItemIcon sx={{ml:2}} key={`Const_${id}`}>
                                                    <Badge badgeContent={Number(contNotificaciones)} color="info"  />
                                                </ListItemIcon>
                                                <ListItemText primary={nombreConst} >
                                                    {/* <Typography variant='body2'> {nombreConst} </Typography> */}
                                                </ListItemText>
                                            </ListItemButton>)
                                    })
                                    :
                                    null
                            }
                            <ListItemButton>
                                <ListItemIcon sx={{ml:2}}>
                                    <Badge badgeContent="2" color="info" />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon sx={{ml:2}}>
                                    <Badge badgeContent="2" color="info" />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon sx={{ml:2}}>
                                    <Badge badgeContent="2" color="info" />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon sx={{ml:2}}>
                                    <Badge badgeContent="2" color="info" />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon sx={{ml:2}}>
                                    <Badge badgeContent="2" color="info" />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </List>
                    </>
            }
        </Box>

    )
}
