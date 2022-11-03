import { Grid, InputLabel, MenuItem, Select, TextField, FormControl, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useFrmCamaraComercio } from '../hook/useFrmCamaraComercio';
import { TerCamaraComercioDTO } from '../../../Model/CamaraComercio';


type props = {
    handleSave: (data: TerCamaraComercioDTO) => void
}

export const FrmUsuarioCC = (data: props) => {

    const { validation, dataInitialState, onInputChange, handleChange, isOpen, setIsOpen, handleGuardar } = useFrmCamaraComercio(data);
    return (
        <>

            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(!isOpen)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={"md"}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Agregar usuario"}
                </DialogTitle>
                <DialogContent>
                    <Grid container
                        spacing={2}
                        width={'100%'}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        p={1}>

                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tipo documento</InputLabel>
                                <Select
                                    size="small"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={dataInitialState.tipoDocumento}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"cc"}>Cédula de ciudadanía</MenuItem>
                                    <MenuItem value={"NIT"}>NIT</MenuItem>
                                    <MenuItem value={"ce"}>Cédula de extranjeria</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                type="number"
                                name="documento"
                                onChange={onInputChange}
                                error={validation.documento.hasError}
                                helperText={validation.documento.msn}
                                value={dataInitialState.documento}
                                label="Numero de documento"
                                fullWidth
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                name="cargo"
                                onChange={onInputChange}
                                error={validation.cargo.hasError}
                                helperText={validation.cargo.msn}
                                value={dataInitialState.cargo}
                                label="Cargo"
                                fullWidth
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                name="nombre"
                                onChange={onInputChange}
                                error={validation.nombre.hasError}
                                helperText={validation.nombre.msn}
                                value={dataInitialState.nombre}
                                label="Nombre"
                                fullWidth
                                size="small"
                            />
                        </Grid>

                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={() => setIsOpen(false)} >Cancelar</Button>
                    <Button variant="contained" color="primary" onClick={handleGuardar} autoFocus >
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>


        </>
    )
}
