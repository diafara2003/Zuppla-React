import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Badge, TextField, InputAdornment, Typography, Paper } from '@mui/material'
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
    const { dataConst, dataConstCopy, isLoading, stateSelectConst, setStateSelectConst, handleOnChangeFilter } = useSelectConstuctora();

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setStateSelectConst(dataConstCopy[index])
        onClick(dataConstCopy[index])
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
                                <Box justifyContent="space-between" display="flex" mb={1}>
                                    <Typography variant='subtitle2' fontWeight={600} color={"primary"} >Constructora: </Typography>
                                    <Typography> {stateSelectConst.nombreConst}</Typography>
                                </Box>
                                <Box m={2} justifyContent={"center"} display={"flex"}>
                                    <img src={isEmpty(stateSelectConst.logoConst ?? '') ? `${import.meta.env.VITE_BACKEND_URL}/api/values/sinlogo` : `${import.meta.env.VITE_BACKEND_URL}/documentos/constructora/logo?constructora=${stateSelectConst.constructoraId}`}></img>
                                </Box>
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
                                dataConstCopy.length != 0
                                    ?
                                    dataConstCopy.map(({ contNotificaciones, nombreConst, constructoraId }, index) => {
                                        return (
                                            <ListItemButton
                                                key={`constructiraid${constructoraId}`}
                                                selected={selectedIndex === index}
                                                onClick={(event) => handleListItemClick(event, index)}
                                            >
                                                <ListItemIcon sx={{ ml: 2 }} key={`Const_${constructoraId}`}>
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
                                                <ListItemText primary={nombreConst} >
                                                    {/* <Typography variant='body2'> {nombreConst} </Typography> */}
                                                </ListItemText>
                                            </ListItemButton>)
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
