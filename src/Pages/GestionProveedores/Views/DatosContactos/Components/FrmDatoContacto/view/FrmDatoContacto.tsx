
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField } from '@mui/material'
import { Autocompleteasync } from '../../../../../../../SharedComponents/Autocomplete/view/Autocompleteasync'
import { TerDatosContactoDTO } from '../../../Model/DatosContactoDTO'
import { typeModal, useFrmDatoContacto } from '../hook/useFrmDatoContacto'

type props = {
    open: boolean,
    tipo: typeModal,
    editDatosContacto?: TerDatosContactoDTO
    close: (dataClose: boolean) => void
    newDatosContacto: (dataContacto: TerDatosContactoDTO) => void
    _title: string

}

export const FrmDatoContacto = (info: props) => {
    const { handleClose, _title, open, onChangeFrm, dataNewContacto, dataValidate, selectedCiudad, submit } = useFrmDatoContacto(info);


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
                                    label="Número de documento"
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
                                    label="Dirección"
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
