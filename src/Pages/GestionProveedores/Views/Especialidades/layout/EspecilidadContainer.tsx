import { KeyboardBackspaceOutlined, Add } from '@mui/icons-material'
import { Box, Button, TextField, InputAdornment } from '@mui/material'
import { NuevaEspecialidad } from '../components/NuevaEspecialidad'
import { TableEspecialidad } from '../components/TableEspecialidad'
import { useEspecilidadContainer } from '../hook/useEspecilidadContainer'
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';

export const EspecilidadContainer = () => {
    const { handleDialog,  openNew } = useEspecilidadContainer();
    return (

        <Box sx={{  background: 'white', }}>

            <Box sx={{ height: 'calc(100vh - 190px)' }}>
                <Box display={"flex"} justifyContent={"end"}>
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


                {openNew
                    ? <Box mt={3}>
                        <NuevaEspecialidad />
                    </Box>
                    : <Box mt={3}>
                        <TableEspecialidad />
                    </Box>

                }

            </Box>

        </Box>

    )
}
