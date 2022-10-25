import { Box, Button, Grid, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNuevaEspecialidad } from '../hook/useNuevaEspecialidad';
import { SkeletonDinamic } from '../../../../../Components/SkeletonComp/View/SkeletonDinamic';
import { AgregarEspecialidad } from '../../AgregarEspecialidad/view/AgregarEspecialidad';
import { ContainerEspecialidad } from '../../EspecialidadItem/view/ContainerEspecialidad';

export const NuevaEspecialidad = () => {
    const { isLoading, especialidades, handleCLick } = useNuevaEspecialidad();

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
                                {especialidades.length == 0 ? null : <ContainerEspecialidad data={especialidades} />}
                            </Grid>
                            <Grid item xs={6} sx={{ overflow: 'auto', maxheight: 'calc(100vh - 254px)' }}>
                                <AgregarEspecialidad />
                            </Grid>
                        </Grid>
                    </Box>
            }
        </>
    )
}

export default NuevaEspecialidad;