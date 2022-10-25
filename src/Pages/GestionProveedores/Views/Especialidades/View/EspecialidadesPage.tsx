import { Add } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, TextField, Typography } from '@mui/material';
import { HeaderComponent } from "../../../../../SharedComponents/Header";
// import './App.css'
import HistoryIcon from '@mui/icons-material/History';
import { useTableEspecialidad } from "../hook/useTableEspecialidad";
import { TableEspecialidad } from "../components/TableEspecialidad/view/TableEspecialidad";
import { NuevaEspecialidad } from "../components/NuevaEspecialidad";
import { SinInformacion } from '../../../Components/ImgComponents/View/SinInformacion';

export const EspecialidadesPage = () => {

    const { data, openDialog, handleEspecialidad, setOpenDialog } = useTableEspecialidad();

    return (
        <>
            <HeaderComponent title={"Especialidades"} />


            <Box sx={{ m: '1px', background: 'white', }}>


                {openDialog ?
                    <Box m={"10px"} mt={"25px"}>
                        <NuevaEspecialidad />
                    </Box>
                    :
                    <Box sx={{ height: 'calc(100vh - 150px)' }}>
                        <Box display={"flex"} justifyContent={"end"} pt={"10px"} pr={"10px"}>

                            <TextField
                                id="outlined-basic"
                                size='small'
                                placeholder='Buscar...'
                                sx={{ width: "400px" }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                label="Buscar" variant="outlined" />
                            <Button onClick={handleEspecialidad} sx={{ ml: "20px" }} variant="text" > <Add sx={{ mr: "8px" }} />Agregar especialidad</Button>
                            <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                        </Box>




                        <Box m={"10px"} mt={"25px"}>
                            {data == null ? <CircularProgress color="inherit" /> :
                                data.length == 0 ? <Box justifyContent={'center'} display={'flex'}>
                                    <SinInformacion />
                                </Box>
                                    : <TableEspecialidad datatable={data!} />}

                        </Box>
                    </Box>
                }

            </Box>


        </>
    )
}

export default EspecialidadesPage;