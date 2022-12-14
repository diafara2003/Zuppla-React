import { Box, Button, Divider, Grid, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNuevaEspecialidad } from '../hook/useNuevaEspecialidad';

import { AgregarEspecialidad } from '../../AgregarEspecialidad/view/AgregarEspecialidad';
import { ContainerEspecialidad } from '../../EspecialidadItem/view/ContainerEspecialidad';
import { useRef } from 'react';
import { SkeletonDinamic } from '../../../../../../../SharedComponents/Skeleton/view/SkeletonDynamic';

type props = {
    filter: string;
}

export const NuevaEspecialidad = ({ filter }: props) => {
    const typing = useRef<TextFieldProps>(null);

    const { isLoading, especialidades } = useNuevaEspecialidad(typing);

    return (
        <>
            {
                isLoading ?
                    <SkeletonDinamic key={"SkeletonNuevaEspecialidad"} NoColumnas={1} NoFilas={5} Tipo={"table"} />
                    :
                    <Box>

                      
                        <Grid container spacing={2} mt={1}>

                            <Grid item xs={6} sx={{ overflow: 'auto', height: 'calc(100vh - 269px)' }}>
                                {especialidades.length == 0 ? null : <ContainerEspecialidad data={especialidades} filter={filter} />}
                            </Grid>
                            <Grid item xs={6} sx={{ overflow: 'auto', maxheight: 'calc(100vh - 320px)' }}>
                                <AgregarEspecialidad />
                            </Grid>

                        </Grid>

                    </Box>
            }
        </>
    )
}

export default NuevaEspecialidad;