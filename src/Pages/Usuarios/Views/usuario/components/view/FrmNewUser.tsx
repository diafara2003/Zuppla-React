import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Validationforms } from '../../../../../../Helper/ValidationForms'
import { UsuariosDTO } from '../../model/usuarioDTO'

type props = {
    open: boolean,
    close: (dataClose: boolean) => void
    newUser: (dataUser: UsuariosDTO) => void
}
type inputFormulario = {
    hasError: boolean, msn: string
}

type validacionFormulario = {
    email: inputFormulario,
    nombre: inputFormulario
    cargo: inputFormulario,
    celular: inputFormulario,
    documento: inputFormulario
}
export const FrmNewUser = ({ newUser, open, close }: props) => {
    const stateValidacionInitial = {
        email: { hasError: false, msn: '' },
        nombre: { hasError: false, msn: '' },
        cargo: { hasError: false, msn: '' },
        celular: { hasError: false, msn: '' },
        documento: { hasError: false, msn: '' },
    }
    const stateInitialNewUser = { cargo: '', celular: '', clave: '', correo: '', documento: '', estado: true, id: -1, isPrincipal: false, nombre: '', tipo: 'P' }

    const [dataNewUser, setDataNewUser] = useState<UsuariosDTO>(stateInitialNewUser)
    const [dataValidate, setDataValidate] = useState(stateValidacionInitial)


    const handleClose = () => {
        close(false)
    };
    const onChangeFrm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDataNewUser(prevState => {
            return { ...prevState, [name]: value }
        });

        //newUser(dataNewUser);

    }
    const submit = () => {
        const _datosValidados = validaciones();
        setDataValidate(_datosValidados);
        if (_datosValidados.cargo.hasError || _datosValidados.celular.hasError || _datosValidados.documento.hasError
            || _datosValidados.email.hasError || _datosValidados.nombre.hasError) {
            return;
        }
        setDataValidate(stateValidacionInitial);       
        newUser(dataNewUser);
        setDataNewUser(stateInitialNewUser)
        handleClose();
    }
    const validaciones = (): validacionFormulario => {
        let validaFRM: validacionFormulario = stateValidacionInitial;
        if (!new Validationforms().EmailIsValid(dataNewUser.correo)) {
            debugger
            return { ...validaFRM, email: { hasError: true, msn: 'Correo invalido' } }
        }
        if (dataNewUser.correo == '') {
            return { ...validaFRM, email: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (dataNewUser.nombre == '') {
            return { ...validaFRM, nombre: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (dataNewUser.cargo == '') {
            return { ...validaFRM, cargo: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (dataNewUser.documento == '') {
            return { ...validaFRM, documento: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (dataNewUser.celular == '') {
            return { ...validaFRM, celular: { hasError: true, msn: 'Campo obligatorio' } }
        }
        return validaFRM;
    }
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
                    Nuevo usuario
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
