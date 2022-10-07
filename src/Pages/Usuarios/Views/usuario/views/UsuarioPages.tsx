import { Box, Button, CircularProgress, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material'
import React from 'react'
import { HeaderComponent } from '../../../../../SharedComponents/Header'
import SearchIcon from '@mui/icons-material/Search';
import { Add, MasksRounded, MoreVert } from '@mui/icons-material';
import HistoryIcon from '@mui/icons-material/History';
import { useUsuario } from '../hook/useUsuario';
import LstUsuarios from './ListadoUsuarios/view/LstUsuarios';
export const UsuarioPages = () => {

    const { data, isLoading } = useUsuario();
    return (

        <>
            <HeaderComponent title={"Usuarios"} />

            <Box sx={{ m: '1px', background: 'white', height: 'calc(100vh - 150px)' }}>

                <Box display={"flex"} justifyContent={"end"} pt={"10px"}>

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
                    {data == null ? <CircularProgress color="inherit" /> : <LstUsuarios datatable={data!} />}

                </Box>

            </Box>
        </>
    )
}
