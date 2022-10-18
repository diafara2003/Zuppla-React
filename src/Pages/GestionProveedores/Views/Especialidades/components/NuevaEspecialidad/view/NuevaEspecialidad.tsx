import { Box, Grid, InputAdornment, TextField, Typography, FormControlLabel, Checkbox } from '@mui/material';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNuevaEspecialidad } from '../hook/useNuevaEspecialidad';
import { CheckBox } from '@mui/icons-material';

export const NuevaEspecialidad = () => {
    const { isLoading, especialidades } = useNuevaEspecialidad();


    const styles = {
        grupo: { color: '#1B344C', fontWeight: 600, paddingBottom: '1rem' },
        categoria: { color: '#1E62A1', fontWeight: 500 },
        especialidad: { color: 'rgba(8, 21, 36, 0.87)' }
    }


    return (
        <>
            <Box
                sx={{ p: 2 }}
            >
                <TextField
                    id="txtbuscarEspecialidad"
                    size='small'
                    placeholder='Buscar especialidad...'
                    sx={{ width: "400px" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    label="Buscar especialidad" variant="outlined" />
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ overflow: 'auto', height: 'calc(100vh - 254px)' }}>
                    {especialidades.length == 0 ? null :

                        especialidades.map(({ grupo, categoria, especialidad, texto }) => {

                            const grupos = <Typography sx={styles.grupo}
                                variant='body1'>{texto}</Typography>

                            const categorias = <Typography sx={styles.categoria}
                                variant='subtitle2'>{texto}</Typography>

                            const especialidades = <Typography sx={styles.especialidad}
                                variant='body2'>{texto}</Typography>


                            return (<Box
                                key={`datos${grupo + categoria + especialidad}`}
                            >
                                {categoria > 0 || especialidad > 0 ?
                                    <FormControlLabel
                                        sx={{ p: 0, m: 0, paddingLeft: (especialidad > 0 ? '1.5rem' : '') }}
                                        key={`FormControlLabel${grupo + categoria + especialidad}`}
                                        control={
                                            <Checkbox
                                                size='small'
                                                sx={{ p: '0.35rem' }}
                                                key={`FormControlLabel${grupo + categoria + especialidad}`}
                                            />} label={especialidad > 0 ? especialidades : categorias} /> : null}
                                {
                                    categoria == 0 && especialidad == 0 ? grupos : null

                                }

                            </Box>)
                        })
                    }

                </Grid>

            </Grid>
        </>
    )
}

export default NuevaEspecialidad;