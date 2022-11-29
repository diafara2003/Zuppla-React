import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Badge, TextField, InputAdornment, Typography, Paper, ListItem, Tooltip } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React, { useState } from 'react'
import { useSelectConstuctora } from '../Hook/useSelectConstuctora';
import { SkeletonDinamic } from '../../../../../SharedComponents/Skeleton/view/SkeletonDynamic';
import { ConstructoraNovDTO } from '../Model/Constructora-Model';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';


type props = {
    onClick: (data: ConstructoraNovDTO) => void
}

export const SelectConstructora = ({ onClick }: props) => {

    const [selectedIndex, setSelectedIndex] = useState<number>();
    const { dataConst, isLoading, stateSelectConst,filter, setStateSelectConst, handleOnChangeFilter } = useSelectConstuctora();

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setStateSelectConst(dataConst[index])
        onClick(dataConst[index])
    };

    const isEmpty = (str: string) => {
        return (!str || str.length === 0);
    }

    return (

        <Box ml={1} mr={2}  >
            {
                isLoading ?
                    <>
                        <SkeletonDinamic NoColumnas={1} NoFilas={4} Tipo={'formulario'} />
                    </>
                    :
                    <Box >
                        {stateSelectConst.constructoraId == -1
                            ? null
                            :
                            <>
                                <Box m={2} justifyContent={"center"} display={"flex"}>
                                    <Box display={'flex'} justifyContent={'center'}>
                                        <img style={{ width: '70%' }} src={`${import.meta.env.VITE_BACKEND_URL}/documentos/constructora/logo?constructora=${stateSelectConst.constructoraId}`}></img>
                                    </Box>
                                </Box>
                                {/* <Box justifyContent="space-between" display="flex" mb={1}>
                                    <Typography variant='subtitle2' fontWeight={600} color={"primary"} >Constructora: </Typography>
                                    <Typography pl={1} noWrap> {stateSelectConst.nombreConst}</Typography>
                                </Box> */}

                            </>
                        }

                        <TextField sx={{ marginBottom: '1rem' }}
                            id="filled-basic"
                            label="Filtrar constructora"
                            variant="outlined"
                            size='small'
                            fullWidth
                            onChange={handleOnChangeFilter}
                            InputProps={{
                                endAdornment: <InputAdornment position="end"><SearchOutlinedIcon /></InputAdornment>,
                            }}
                        />

                        <Divider />
                        <List component="nav" aria-label="main mailbox folders">
                            {
                                dataConst.length != 0
                                    ?
                                    dataConst.filter(c => c.nombreConst.toLowerCase().includes(filter!.toLowerCase())).map(({ contNotificaciones, nombreConst, constructoraId }, index) => {
                                        return (
                                            <ListItem disablePadding>
                                                <ListItemButton
                                                    key={`constructiraid${constructoraId}`}
                                                    selected={selectedIndex === index}
                                                    onClick={(event) => handleListItemClick(event, index)}
                                                >
                                                    <ListItemIcon sx={{ m: 1, minWidth: '2rem' }} key={`Const_${constructoraId}`}>
                                                        <Badge badgeContent={Number(contNotificaciones)} color="warning" >
                                                            {
                                                                Number(contNotificaciones) > 0
                                                                    ?
                                                                    <NotificationsActiveOutlinedIcon />
                                                                    :
                                                                    <NotificationsOffOutlinedIcon />
                                                            }
                                                        </Badge>
                                                    </ListItemIcon>

                                                    <ListItemText>
                                                        <Tooltip
                                                            enterDelay={500}
                                                            children={<Typography variant='body2' noWrap> {nombreConst} </Typography>} title={nombreConst}
                                                        />

                                                    </ListItemText>
                                                </ListItemButton>
                                            </ListItem>
                                        )
                                    })
                                    :
                                    null
                            }
                        </List>
                    </Box>
            }
        </Box>

    )
}
