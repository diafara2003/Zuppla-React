import { TextFields } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Validationforms } from '../../../../../Helper/ValidationForms'
import { Autocompleteasync } from '../../../../../SharedComponents/Autocomplete/view/Autocompleteasync'
import { INITIAL_STATE_CONTACTO, INITIAL_STATE_VALIDATION_CONTACTO, validacionFormulario } from '../Model/DatosContacto-Model'
import { CiudadesDTO, TerDatosContactoDTO } from '../Model/DatosContactoDTO'

type props = {
    open: boolean,
    tipo: typeModal,
    editDatosContacto?: TerDatosContactoDTO
    close: (dataClose: boolean) => void
    newDatosContacto: (dataContacto: TerDatosContactoDTO) => void
    _title: string

}

export enum typeModal {
    add = 'add',
    edit = 'edit'

}

export const FrmDatoContacto = ({ close, newDatosContacto, editDatosContacto, open, tipo, _title }: props) => {
    // if (tipo == typeModal.add)
    //     editDatosContacto = INITIAL_STATE_CONTACTO

    const [dataValidate, setDataValidate] = useState(INITIAL_STATE_VALIDATION_CONTACTO)
    const [dataNewContacto, setdataNewContacto] = useState<TerDatosContactoDTO>(tipo == typeModal.add ? INITIAL_STATE_CONTACTO! : editDatosContacto!)

    const handleClose = () => {
        close(false)
    };

    const selectedCiudad = (value: Object) => {
        setdataNewContacto({
            ...dataNewContacto,
            ciudad: (value as CiudadesDTO)
        });
    }

    const onChangeFrm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setdataNewContacto(prevState => {
            return { ...prevState, [name]: value }
        });
    }

    const submit = () => {
        debugger
        const _datosValidados = validaciones();
        setDataValidate(_datosValidados);
        if (_datosValidados.cargo.hasError || _datosValidados.celular.hasError || _datosValidados.documento.hasError
            || _datosValidados.email.hasError || _datosValidados.nombre.hasError || _datosValidados.telefono.hasError
            || _datosValidados.ciudad.hasError || _datosValidados.direccion.hasError) {
            return;
        }
        setDataValidate(INITIAL_STATE_VALIDATION_CONTACTO);
        newDatosContacto(dataNewContacto);
        setdataNewContacto(INITIAL_STATE_CONTACTO)
        handleClose();
    }
    const validaciones = (): validacionFormulario => {

        let validaFRM: validacionFormulario = INITIAL_STATE_VALIDATION_CONTACTO;


        if (dataNewContacto.correo == '') {
            return { ...validaFRM, email: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (!new Validationforms().EmailIsValid(dataNewContacto.correo)) {

            return { ...validaFRM, email: { hasError: true, msn: 'Ingrese un correo valido' } }
        }
        if (dataNewContacto.nombre == '') {
            return { ...validaFRM, nombre: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (dataNewContacto.cargo == '') {
            return { ...validaFRM, cargo: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (dataNewContacto.numeroDocumento == '') {
            return { ...validaFRM, documento: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (!new Validationforms().OnlyInteger(dataNewContacto.numeroDocumento)) {
            return { ...validaFRM, documento: { hasError: true, msn: 'Ingrese un documento valido' } }
        }
        if (dataNewContacto.celular == '') {
            return { ...validaFRM, celular: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (!new Validationforms().OnlyInteger(dataNewContacto.celular)) {
            return { ...validaFRM, celular: { hasError: true, msn: 'Ingrese un celular valido' } }
        }
        if (!new Validationforms().PhoneValid(dataNewContacto.celular)) {
            return { ...validaFRM, celular: { hasError: true, msn: 'Ingrese un celular valido' } }
        }
        if (dataNewContacto.telefono == '') {
            return { ...validaFRM, telefono: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (!new Validationforms().OnlyInteger(dataNewContacto.telefono)) {
            return { ...validaFRM, celular: { hasError: true, msn: 'Ingrese un celular valido' } }
        }
        if (!new Validationforms().PhoneValid(dataNewContacto.telefono)) {
            return { ...validaFRM, celular: { hasError: true, msn: 'Ingrese un celular valido' } }
        }
        if (dataNewContacto.ciudad.id == 0 || dataNewContacto.ciudad.nombre == "") {
            return { ...validaFRM, ciudad: { hasError: true, msn: 'Campo obligatorio' } }
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
                    {_title}
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

                            <Grid item xs={4}>
                                <TextField
                                    required
                                    id=""
                                    label="Nombre"
                                    name="nombre"
                                    fullWidth
                                    size="small"
                                    onChange={onChangeFrm}
                                    value={dataNewContacto?.nombre}
                                    error={dataValidate.nombre.hasError}
                                    helperText={dataValidate.nombre.msn}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    id=""
                                    label="Numero de documento"
                                    name="numeroDocumento"
                                    fullWidth
                                    size="small"
                                    onChange={onChangeFrm}
                                    value={dataNewContacto?.numeroDocumento}
                                    error={dataValidate.documento.hasError}
                                    helperText={dataValidate.documento.msn}
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    id=""
                                    label="Email"
                                    name="correo"
                                    fullWidth
                                    size="small"
                                    onChange={onChangeFrm}
                                    value={dataNewContacto?.correo}
                                    error={dataValidate.email.hasError}
                                    helperText={dataValidate.email.msn}
                                    type="email"
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <TextField
                                    required
                                    id=""
                                    label="Telefono"
                                    name="telefono"
                                    fullWidth
                                    size="small"
                                    onChange={onChangeFrm}
                                    value={dataNewContacto?.telefono}
                                    error={dataValidate.telefono.hasError}
                                    helperText={dataValidate.telefono.msn}
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    id=""
                                    label="Celular"
                                    name="celular"
                                    fullWidth
                                    size="small"
                                    onChange={onChangeFrm}
                                    value={dataNewContacto?.celular}
                                    error={dataValidate.celular.hasError}
                                    helperText={dataValidate.celular.msn}
                                    type="number"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    id=""
                                    label="Direccion"
                                    name="direccion"
                                    fullWidth
                                    size="small"
                                    onChange={onChangeFrm}
                                    value={dataNewContacto?.direccion}
                                    error={dataValidate.direccion.hasError}
                                    helperText={dataValidate.direccion.msn}
                                />
                            </Grid>

                            <Grid item xs={4}>
                                <TextField
                                    required
                                    id=""
                                    label="Cargo"
                                    name="cargo"
                                    fullWidth
                                    size="small"
                                    onChange={onChangeFrm}
                                    value={dataNewContacto?.cargo}
                                    error={dataValidate.cargo.hasError}
                                    helperText={dataValidate.cargo.msn}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Autocompleteasync
                                    label="Ciudad"
                                    method="Ciudad?filter="
                                    nombreDataOcject="nombre"
                                    showError={dataValidate.ciudad}
                                    fnSeleted={(data) => selectedCiudad(data as Object)}
                                    defaultValue={dataNewContacto?.ciudad}
                                />
                            </Grid>
                            <Grid item xs={4}>
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
