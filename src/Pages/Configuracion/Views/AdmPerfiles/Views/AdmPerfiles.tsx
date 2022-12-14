import { Button, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Fondo } from '../../../../../SharedComponents/Fondo'
import { HeaderComponent } from '../../../../../SharedComponents/Header'
import { SkeletonDinamic } from '../../../../../SharedComponents/Skeleton/view/SkeletonDynamic'
import { DialogPerfiles } from '../Components/DialogPerfiles/Views/DialogPerfiles'
import { TablePerfiles } from '../Components/TablePerfiles/Views/TablePerfiles'
import { UseAdmPerfiles } from '../Hook/UseAdmPerfiles'
import { ActionPerfil, INITIAL_PERFIL, PerfilConsultaDTO, typeModal } from '../Model/AdmPerfil-Model'
import { Add } from "@mui/icons-material";

export const AdmPerfiles = () => {
    const { statePerfil, isLoading, StateOpenDialog, stateTipoModal,
        setStatePerfilSelected, setStateOpenDialog, setStateTipoModal, actionPerfiles,
         statePerfilSelected, actualizaStatePerfil } = UseAdmPerfiles();


    return (
        <>
            <HeaderComponent title={`Administración de perfiles`} />
            <Box>
                <Grid item lg={12} xl={12} m={1} position="absolute">
                    <Fondo />
                </Grid>
                <Box pt={2} pr={2} display={'flex'} justifyContent={'flex-end'}>
                    <Button variant="outlined"
                        startIcon={<Add color="primary" />}
                        sx={{ backgroundColor: 'white !important' }}
                        onClick={() => {
                            setStateOpenDialog(true);
                            setStateTipoModal(typeModal.add);
                        }}
                    >
                        Agregar nuevo perfil
                    </Button>
                </Box>


                <Grid container justifyContent={"center"} position={"relative"} top={50}>
                    {
                        isLoading
                            ?
                            <SkeletonDinamic NoColumnas={1} NoFilas={4} Tipo={'formulario'} />
                            :
                            <Grid item lg={8}>
                                <Paper elevation={2}>
                                    <TablePerfiles
                                        dataTable={statePerfil}
                                        onClick={(dataAction) => {
                                            if (dataAction.action != ActionPerfil.Default) {
                                                setStatePerfilSelected(dataAction.perfilData);
                                                actionPerfiles(dataAction.action, dataAction.perfilData)
                                            }
                                        }} />
                                </Paper>
                            </Grid>
                    }
                </Grid>
            </Box>
            {
                StateOpenDialog ?
                    <DialogPerfiles
                        OpenDialog={StateOpenDialog}
                        TipoModal={stateTipoModal}
                        statePerfil={statePerfilSelected}
                        handleCloseDialog={(close) => {
                            setStateOpenDialog(close);
                        }}
                        handleSubmit={(dataNew)=>{
                            actualizaStatePerfil(dataNew)                          
                        }}
                    />
                    : null
            }
        </>

    )
}
export default AdmPerfiles