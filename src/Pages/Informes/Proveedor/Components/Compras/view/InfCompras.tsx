
import { Box, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { HeaderComponent } from "../../../../../../SharedComponents/Header"
import { InfSincoApi } from "../../../../../../SharedComponents/InfApiSinco";
import { TipoInformeApiSincoDTO } from "../../../../../../SharedComponents/InfApiSinco/model/modelInfAPiSinco";
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from "moment";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Tooltip from "@mui/material/Tooltip";
import { LoadingButton } from "@mui/lab";
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import { DialogConst } from "../../DialogSelectorConstruc/Views/DialogConst";



export const InfCompras = () => {

    const [value, setValue] = useState<string | null>(moment().format("YYYY-MM-DD"));
    const [estado, setEstado] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setEstado(event.target.value as string);
    };
    return (
        <>
            <HeaderComponent title={`Informe de ordenes de compra`} />

            <Stack height={60} direction="row" justifyContent={'flex-start'} display={'flex'} alignItems={'center'} spacing={2}>
                <Box pl={2} justifyContent={'flex-start'} display={'flex'} alignItems={'center'} >
                    <Tooltip title="Seleccionar constructora">
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            < ApartmentOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="subtitle1" color={"primary"} >Constructora:</Typography>
                </Box>
                <Tooltip title="asd">
                    <Typography noWrap sx={{ maxWidth: 'calc(70vh - 10rem)' }}>Pruebas jk jk jk asasasasaasasasdasdasdasasasdasdasdadddddddddddddddddddddsdasdasdasdasdadasddasdasdasdasdasd </Typography>
                </Tooltip>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Box width={'10rem'}>
                        <DesktopDatePicker
                            label="Fecha Inicial"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}

                            renderInput={(params) => <TextField size="small" {...params} />}
                        />
                    </Box>
                    <Box width={'10rem'}>
                        <DesktopDatePicker
                            label="Fecha Final"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField size="small" {...params} />}
                        />
                    </Box>
                </LocalizationProvider>
                <Box width={'10rem'}>
                    <TextField
                        id="txNumeroDocumento"
                        label="Número de documento"
                        size="small"
                    />
                </Box>

                <Box width={'12rem'}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={estado}
                            label="Estado"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Pendiente de entrega</MenuItem>
                            <MenuItem value={2}>En proceso de entrega</MenuItem>
                            <MenuItem value={3}>Entregado al 100%</MenuItem>
                            <MenuItem value={4}>Cerrado</MenuItem>
                            <MenuItem value={5}>Cancelado</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box>
                    <LoadingButton
                        size="small"                           
                        endIcon={<PageviewOutlinedIcon />}
                        loading={false}
                        loadingPosition="end"
                        variant="contained"
                    >
                        Consultar
                    </LoadingButton>
                </Box>
            </Stack>

            <Box sx={{ background: 'white', height: 'calc(100vh - 200px)' }}>
                <Grid container width={'100%'}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    spacing={1}
                    p={1}
                >
                    <Grid item xs={12}>
                        <InfSincoApi tipo={TipoInformeApiSincoDTO.OrdenCompra} />
                    </Grid>

                </Grid>
            </Box>

          <DialogConst openD={true}/>


        </>
    )
}


export default InfCompras;