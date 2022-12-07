import { LoadingButton } from '@mui/lab';
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Tooltip, IconButton, Typography, TextField, FormControl, InputLabel, Select, MenuItem, } from '@mui/material';
import { Stack, Box } from '@mui/system';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { RequestAPiSincoDTO } from '../../../../../../SharedComponents/InfApiSinco/model/modelInfAPiSinco';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import { DialogConst } from '../../DialogSelectorConstruc/Views/DialogConst';
import { useFiltrosInformes } from '../Hook/useFiltrosInformes';

type props = {
    handleFilter: (data: RequestAPiSincoDTO) => void,
    showEstado?: boolean
}
export const FiltroInf = ({ handleFilter, showEstado }: props) => {
    if (showEstado == undefined) showEstado = true
    const { estado, fechaFinal, fechaInicial, handleChange, handleClikOpenConst, handleConsultar, handleOnChange,
        openConstructora, constructoraFilter, setFechaInicial, setfechaFinal, setOpenConstructora }
        = useFiltrosInformes(handleFilter);

    return (
        <>
            <Stack height={60} direction="row" justifyContent={'flex-start'} display={'flex'} alignItems={'center'} spacing={2}>
                <Box pl={2} justifyContent={'flex-start'} display={'flex'} alignItems={'center'} >
                    <Tooltip title="Seleccionar constructora">
                        <IconButton onClick={handleClikOpenConst} color="primary" component="label">
                            < ApartmentOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Typography variant="subtitle1" color={"primary"} >Constructora:</Typography>
                </Box>
                <Tooltip title={constructoraFilter.nombre}>
                    <Typography noWrap sx={{ maxWidth: 'calc(70vh - 10rem)' }}>{constructoraFilter.nombre == '' ? 'Seleccione una constructora...' : constructoraFilter.nombre} </Typography>
                </Tooltip>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Box width={'10rem'}>
                        <DesktopDatePicker
                            label="Fecha Inicial"
                            value={fechaInicial}
                            onChange={(newValue) => {
                                setFechaInicial(newValue);
                            }}
                            renderInput={(params) => <TextField size="small" {...params} />}
                        />
                    </Box>
                    <Box width={'10rem'}>
                        <DesktopDatePicker
                            label="Fecha Final"
                            value={fechaFinal}
                            onChange={(newValue) => {
                                setfechaFinal(newValue);
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
                        onChange={handleOnChange}
                    />
                </Box>
                {
                    showEstado ? <Box width={'12rem'}>
                        <FormControl fullWidth size="small">
                            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={estado.toString()}
                                label="Estado"
                                onChange={handleChange}
                            >
                                <MenuItem value={-1}>Todos</MenuItem>
                                <MenuItem value={1}>Pendiente de entrega</MenuItem>
                                <MenuItem value={2}>En proceso de entrega</MenuItem>
                                <MenuItem value={3}>Entregado al 100%</MenuItem>
                                <MenuItem value={4}>Cerrado</MenuItem>
                                <MenuItem value={5}>Cancelado</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                        : null
                }
                <Box>
                    <LoadingButton

                        endIcon={<PageviewOutlinedIcon />}
                        loading={false}
                        loadingPosition="end"
                        variant="contained"
                        onClick={handleConsultar}
                    >
                        Consultar
                    </LoadingButton>
                </Box>
            </Stack>
            {
                openConstructora ?
                    <DialogConst
                        openD={openConstructora}
                        hanleClickAc={(dialog) => {
                            setOpenConstructora(false)
                        }} />
                    : null
            }
        </>
    )
}
