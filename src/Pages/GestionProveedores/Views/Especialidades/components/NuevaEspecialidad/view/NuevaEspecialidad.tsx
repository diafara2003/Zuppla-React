import { Box, Grid, InputAdornment, TextField, Typography, FormControlLabel, Checkbox, Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNuevaEspecialidad } from '../hook/useNuevaEspecialidad';
import { CheckBox, Home, KeyboardArrowRight, Label, RemoveCircleOutlineOutlined } from '@mui/icons-material';
import { SkeletonDinamic } from '../../../../../Components/SkeletonComp/View/SkeletonDinamic';
import { SinInformacion } from '../../../../../Components/ImgComponents/View/SinInformacion';

export const NuevaEspecialidad = () => {
    const { isLoading, especialidades } = useNuevaEspecialidad();


    const styles = {
        grupo: { color: '#1B344C', fontWeight: 600, paddingBottom: '1rem' },
        categoria: { color: '#1E62A1', fontWeight: 500 },
        especialidad: { color: 'rgba(8, 21, 36, 0.87)' }
    }




    return (
        <>

            {
                isLoading ?
                    <SkeletonDinamic NoColumnas={1} NoFilas={5} Tipo={"TABLE"} />
                    :
                    <Box sx={{ flexGrow: 1 }} p={2} >
                        <Grid container spacing={2}>
                            <Grid item xs={11}>
                                <TextField
                                    id="txtbuscarEspecialidad"
                                    size='small'
                                    placeholder='Buscar especialidad...'
                                    sx={{ width: "100%" }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    label="Buscar especialidad" variant="outlined" />
                            </Grid>
                            <Grid item xs={1} sx={{ textAlign: 'left' }} >
                                <Button color="primary" variant="contained">Guardar</Button>
                            </Grid>



                        </Grid>
                        <Grid container spacing={2} mt={1}>
                            <Grid item xs={6} sx={{ overflow: 'auto', height: 'calc(100vh - 268px)' }}>
                                <Box>

                                    {especialidades.length == 0 ? null :

                                        especialidades.slice(0, 200).map(({ grupo, categoria, especialidad, texto }) => {

                                            const grupos = <Typography noWrap sx={styles.grupo} variant='body1'>{texto}</Typography>

                                            const categorias = <Typography noWrap variant='body1' sx={styles.categoria}>{texto}</Typography>

                                            const especialidades = <Typography noWrap sx={styles.especialidad} variant='body2'>{texto}</Typography>

                                            return (<Box
                                                key={`container_g${grupo}_c${categoria}_e${especialidad}`}
                                            >
                                                {categoria > 0 || especialidad > 0 ?

                                                    <Box
                                                        sx={{
                                                            "&:hover": {
                                                                backgroundColor: "#D4E4F1",
                                                                cursor: "pointer",
                                                            }
                                                        }}
                                                    >
                                                        <FormControlLabel
                                                            sx={{
                                                                width: '100%', p: 0, m: 0, paddingLeft: (especialidad > 0 ? '1.5rem' : '')
                                                            }}
                                                            key={`FormControlLabel${grupo + categoria + especialidad}`}
                                                            control={
                                                                <Checkbox
                                                                    size='small'
                                                                    key={`FormControlLabel${grupo + categoria + especialidad}`}
                                                                />} label={especialidad > 0 ? especialidades : categorias} /> </Box> : null}
                                                {
                                                    categoria == 0 && especialidad == 0 ? grupos : null

                                                }

                                            </Box>)
                                        })
                                    }

                                </Box>

                            </Grid>
                            <Grid item xs={6} sx={{ overflow: 'auto', maxheight: 'calc(100vh - 254px)' }}>
                                <Box>
                                    <Typography variant='h6'>Especialidades agregadas</Typography>
                                </Box>

                                <Box justifyContent={'start'} display={'flex'}

                                >
                                    {/* <SinInformacion /> */}
                                    <List sx={{
                                        width: '100%',
                                        maxHeight: 300,
                                        overflow: 'auto',
                                    }}>
                                        <ListItem>
                                            <ListItemButton>

                                                <ListItemText primary="Dibujante" />
                                                <RemoveCircleOutlineOutlined color="primary" />


                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Box>

                            </Grid>

                        </Grid>

                    </Box>
            }


        </>
    )
}

export default NuevaEspecialidad;