import { Avatar, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Skeleton, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { APiMethod, requestAPI, RequestModel, ResponseDTO } from '../../../../../../../Provider'
import { SkeletonDinamic } from '../../../../../../../SharedComponents/Skeleton/view/SkeletonDynamic'
import { AlertContext } from '../../../../../../Menu/context/AlertContext'
import { AgregarPerfilDTO, INITIAL_PERFIL, PerfilConsultaDTO, PerfilDTO, typeModal, UsuariosDTO, UsuariosSinPerfilDTO } from '../../../Model/AdmPerfil-Model'
import { useDialogPerfiles } from '../Hook/useDialogPerfiles'

type props = {
    OpenDialog: boolean,
    statePerfil: PerfilConsultaDTO,
    TipoModal: typeModal,
    handleCloseDialog: (dataClose: boolean) => void,
    handleSubmit :(dataPerfil:PerfilDTO) => void
}

export const DialogPerfiles = ({ OpenDialog, statePerfil, TipoModal, handleCloseDialog, handleSubmit }: props) => {

    const { open, handleClose, isLoading, state, onChangeFrm, error, handleChangeBuscar, stateUserPerfil, filterUser, handleCheckUser, checkedUsers,
        handleAgregarPerfil } = useDialogPerfiles({ OpenDialog, statePerfil, TipoModal, handleCloseDialog, handleSubmit });

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth={'md'}
        >
            <DialogTitle id="alert-dialog-title">
                {TipoModal == typeModal.edit ? "Editar perfil " : "Agregar perfil "}
            </DialogTitle>
            <DialogContent>
                {
                    isLoading ?
                        <SkeletonDinamic NoColumnas={1} NoFilas={4} Tipo={'formulario'} />
                        :
                        <Grid container spacing={2}>
                            <Grid item lg={3} justifyContent={'center'} display={'flex'} alignItems={'center'} sx={{ borderRight: '1px solid lightgray' }}>
                                {/* <Typography>Nombre del perfil</Typography> */}
                                <Box pr={1}>
                                    <TextField
                                        name="nombre"
                                        id="fieldTextNombre"
                                        label="Nombre del perfil"
                                        variant="outlined"
                                        size='small'
                                        value={state.nombre}
                                        onChange={onChangeFrm}
                                        error={error.nombre.hasError}
                                        helperText={error.nombre.msn}
                                        fullWidth
                                    />
                                </Box>

                            </Grid>
                            <Grid item lg={9}>
                                <Box pt={1}>
                                    <TextField
                                        id="fieldTextNombre"
                                        label="Filtrar usuario"
                                        variant="outlined"
                                        size='small'
                                        onChange={handleChangeBuscar}
                                        fullWidth

                                    />
                                </Box>
                                <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                    {stateUserPerfil
                                        .filter(c => c.nombre.toLowerCase().includes(filterUser.toLowerCase()))
                                        .map((value) => {
                                            const labelId = `checkbox-list-secondary-label-${value.id}`;
                                            return (
                                                <ListItem
                                                    key={value.id}
                                                    secondaryAction={
                                                        <Checkbox
                                                            edge="end"
                                                            onChange={handleCheckUser(value.id)}
                                                            checked={checkedUsers.indexOf(value.id) !== -1}
                                                            inputProps={{ 'aria-labelledby': labelId }}
                                                        />
                                                    }
                                                    disablePadding
                                                >
                                                    <ListItemButton>
                                                        <ListItemAvatar>
                                                            <Avatar
                                                                alt={`${value.nombre}`}
                                                                src="/"
                                                            />
                                                        </ListItemAvatar>
                                                        <ListItemText id={labelId} primary={`${value.nombre}`} />
                                                    </ListItemButton>
                                                </ListItem>
                                            );
                                        })}
                                </List>
                            </Grid>
                        </Grid>
                }
                <DialogContentText id="alert-dialog-description">
                </DialogContentText> 
            </DialogContent>

            <DialogActions>
                <Button variant='text' color='error' onClick={handleClose}>Cancelar</Button>
                <Button variant='outlined' onClick={handleAgregarPerfil} autoFocus>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
