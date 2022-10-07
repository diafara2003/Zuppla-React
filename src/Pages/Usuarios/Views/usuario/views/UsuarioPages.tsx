import { Box, Button, CircularProgress, InputAdornment, TextField } from '@mui/material'
import { HeaderComponent } from '../../../../../SharedComponents/Header'
import SearchIcon from '@mui/icons-material/Search';
import { Add } from '@mui/icons-material';
import HistoryIcon from '@mui/icons-material/History';
import { useUsuario } from '../hook/useUsuario';
import TableUsuario from '../components/view/TableUsuario';

export const UsuarioPages = () => {

    const { data, isLoading } = useUsuario();
    return (

        <>
            <HeaderComponent title={"Usuarios"} />

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
                        label="Buscar..." variant="outlined" />
                    <Button sx={{ ml: "20px" }} variant="text" > <Add sx={{ mr: "8px" }} />Agregar usuario</Button>
                    <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                </Box>


                <Box m={"10px"} mt={"25px"}>
                    {data == null ? <CircularProgress color="inherit" /> : <TableUsuario datatable={data!} />}

                </Box>

            </Box>
        </>
    )
}
