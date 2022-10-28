import { KeyboardBackspaceOutlined, Add } from '@mui/icons-material'
import { Box, Button, TextField, InputAdornment, TextFieldProps, Grid } from '@mui/material'
import { NuevaEspecialidad } from '../components/NuevaEspecialidad'
import { TableEspecialidad } from '../components/TableEspecialidad'
import { useEspecilidadContainer } from '../hook/useEspecilidadContainer'
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import { useRef } from 'react'

export const EspecilidadContainer = () => {
    const typing = useRef<TextFieldProps>(null);

    const { handleDialog, openNew, handleChangeTyping, inputfilter } = useEspecilidadContainer(typing);

    return (

        <Box sx={{ background: 'white', }}>

            <Box sx={{ height: 'calc(100vh - 190px)' }}>
                <Box display={"flex"} justifyContent={"end"}>
                    {openNew
                        ? <Grid container justifyContent={"flex-start"}>

                            <TextField
                                id="txtbuscarEspecialidad"
                                size='small'
                                inputRef={typing}
                                onInput={() => handleChangeTyping("new")}
                                placeholder='Buscar especialidad...'
                                sx={{ width: "calc(100vw - 350px)" }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                label="Buscar especialidad" variant="outlined" />
                            <Button onClick={handleDialog} sx={{ ml: "20px" }} variant="text" > <KeyboardBackspaceOutlined sx={{ mr: "8px" }} />Regresar</Button>
                        </Grid>
                        : <Grid>
                            <TextField
                                id="outlined-basic"
                                size='small'
                                inputRef={typing}
                                onInput={() => handleChangeTyping("table")}
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
                        </Grid>
                    }


                </Box>


                {openNew
                    ? <Box mt={3}>
                        <NuevaEspecialidad filter={inputfilter.filterNew} />
                    </Box>
                    : <Box mt={3}>
                        <TableEspecialidad filter={inputfilter.filterTable} />
                    </Box>

                }

            </Box>

        </Box>

    )
}
