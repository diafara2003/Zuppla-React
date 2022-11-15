import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Validationforms } from '../../../../../../../Helper/ValidationForms'
import { INITIAL_USUARIO_DTO, INITIAL_VALIDATION_USUARIO, UsuariosDTO, validacionFormulario } from '../../../model/usuarioDTO'
import { useFrmNewUser } from '../hook/useFrmNewUser'

type props = {
    open: boolean,
    tipo: typeModal,
    editUser: UsuariosDTO
    close: (dataClose: boolean) => void
    newUser: (dataUser: UsuariosDTO) => void
}
export enum typeModal {
    add = 'add',
    edit = 'edit'

}


export const FrmNewUser = ({ newUser, open, close, tipo, editUser }: props) => {
    const { handleClose, onChangeFrm, dataNewUser, dataValidate, submit } = useFrmNewUser({ newUser, open, close, tipo, editUser }
    );
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"md"}
            >
                <DialogTitle id="alert-dialog-title">
                    {tipo == typeModal.add ? "Nuevo usuario" : "Editar usuario"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Grid container
                            spacing={2}
                            width={'100%'}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            p={1}>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    name='nombre'
                                    label="Nombre"
                                    fullWidth
                                    size="small"
                                    onChange={onChangeFrm}
                                    value={dataNewUser?.nombre}
                                    error={dataValidate.nombre.hasError}
                                    helperText={dataValidate.nombre.msn}

                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    name='documento'
                                    label="Numero de documento"
                                    fullWidth
                                    size="small"
                                    onChange={onChangeFrm}
                                    error={dataValidate.documento.hasError}
                                    helperText={dataValidate.documento.msn}
                                    value={dataNewUser?.documento}
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    name='cargo'
                                    label="Cargo"
                                    fullWidth
                                    size="small"
                                    onChange={onChangeFrm}
                                    error={dataValidate.cargo.hasError}
                                    helperText={dataValidate.cargo.msn}
                                    value={dataNewUser?.cargo}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    error={dataValidate.email.hasError}
                                    name='correo'
                                    label="Email"
                                    fullWidth
                                    size="small"
                                    onChange={onChangeFrm}
                                    helperText={dataValidate.email.msn}
                                    value={dataNewUser?.correo}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    required
                                    name='celular'
                                    label="Celular"
                                    fullWidth
                                    size="small"
                                    onChange={onChangeFrm}
                                    error={dataValidate.celular.hasError}
                                    helperText={dataValidate.celular.msn}
                                    type="number"
                                    value={dataNewUser?.celular}
                                />
                            </Grid>
                            <Grid item xs={6}>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose} >Cancelar</Button>
                    <Button variant="contained" color="primary" onClick={submit} autoFocus >
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>
        </>


    )
}
