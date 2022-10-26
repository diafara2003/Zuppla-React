import { Add, KeyboardBackspaceOutlined } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, TextField, Typography } from '@mui/material';
import { HeaderComponent } from "../../../../../SharedComponents/Header";
// import './App.css'
import HistoryIcon from '@mui/icons-material/History';
import { useEspecialidadPages } from "../hook/useEspecialidadPages";
import { TableEspecialidad } from "../components/TableEspecialidad/view/TableEspecialidad";
import { NuevaEspecialidad } from "../components/NuevaEspecialidad";
import { SinInformacion } from '../../../Components/ImgComponents/View/SinInformacion';
import { EspecialidadProvider } from "../components/Context";

export const EspecialidadesPage = () => {

    const { openNew, handleDialog } = useEspecialidadPages();

    return (
        <>
            <HeaderComponent title={"Especialidades"} />


            <Box sx={{ background: 'white', }}>

                <Box sx={{ height: 'calc(100vh - 150px)' }}>
                    <Box display={"flex"} justifyContent={"end"} pr={"10px"}>
                        {openNew
                            ? <Button onClick={handleDialog} sx={{ ml: "20px" }} variant="text" > <KeyboardBackspaceOutlined sx={{ mr: "8px" }} />Regresar</Button>
                            : <>
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
                                <Button onClick={handleDialog} sx={{ ml: "20px" }} variant="text" > <Add sx={{ mr: "8px" }} />Agregar especialidad</Button>
                                <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                            </>
                        }


                    </Box>

                    <EspecialidadProvider>
                        {openNew
                            ? <Box m={"10px"} >
                                <NuevaEspecialidad />
                            </Box>
                            : <Box m={"10px"} mt={"25px"}>
                                <TableEspecialidad />
                            </Box>

                        }
                    </EspecialidadProvider>
                </Box>

            </Box>


        </>
    )
}

export default EspecialidadesPage;