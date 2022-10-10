import { Add } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, TextField, Typography } from '@mui/material';
import { HeaderComponent } from "../../../../../SharedComponents/Header";
// import './App.css'
import HistoryIcon from '@mui/icons-material/History';
import { useTableEspecialidad } from "../hook/useTableEspecialidad";
import { TableEspecialidad } from "../components/TableEspecialidad/view/TableEspecialidad";
import { NuevaEspecialidad } from "../components/NuevaEspecialidad";

export const EspecialidadesPage = () => {

    const { data, openDialog, handleEspecialidad, setOpenDialog } = useTableEspecialidad();

    return (
        <>
            <HeaderComponent title={"Especialidades"} />


            <Box sx={{ m: '1px', background: 'white', height: 'calc(100vh - 150px)' }}>

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
                    {data == null ? <CircularProgress color="inherit" /> : <TableEspecialidad datatable={data!} />}

                </Box>

            </Box>


            <Dialog
                open={openDialog}
                sx={{
                    "& .MuiDialog-container": {
                      "& .MuiPaper-root": {
                        width: "600px"
                        // maxWidth: "500px",  // Set your width here
                      },
                    },
                  }}
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography color="#283340" variant="subtitle1">Agregar especialización</Typography>
                </DialogTitle>
                <DialogContent>
                    <NuevaEspecialidad />
                </DialogContent>
                <DialogActions>
                    <Button size="medium" variant="outlined" onClick={() => setOpenDialog(false)}>Cancelar</Button>
                    <Button onClick={() => setOpenDialog(false)} variant="contained" autoFocus size="medium" color="primary">Guardar</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export default EspecialidadesPage;