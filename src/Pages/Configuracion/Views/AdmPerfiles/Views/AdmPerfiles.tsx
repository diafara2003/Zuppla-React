import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Fondo } from '../../../../../SharedComponents/Fondo'
import { HeaderComponent } from '../../../../../SharedComponents/Header'
import { SkeletonDinamic } from '../../../../../SharedComponents/Skeleton/view/SkeletonDynamic'
import { DialogPerfiles } from '../Components/DialogPerfiles'
import { TablePerfiles } from '../Components/TablePerfiles'
import { UseAdmPerfiles } from '../Hook/UseAdmPerfiles'
import { ActionPerfil, INITIAL_PERFIL, PerfilConsultaDTO, typeModal } from '../Model/AdmPerfil-Model'

export const AdmPerfiles = () => {
    const { statePerfil, isLoading } = UseAdmPerfiles();
    const [statePerfilSelected, setStatePerfilSelected] = useState<PerfilConsultaDTO>(INITIAL_PERFIL)
    const [stateTipoModal, setStateTipoModal] = useState<typeModal>(typeModal.add)
    const [StateOpenDialog, setStateOpenDialog] = useState(false)
    const actionPerfiles = (action: ActionPerfil) => {
        switch (action) {
            case ActionPerfil.New:
                setStateOpenDialog(true)
                break;
            case ActionPerfil.Edit:
                setStateOpenDialog(true)
                break;
            case ActionPerfil.Historial:

                break;
            default:
                break;
        }
    }

    return (
        <>
            <HeaderComponent title={`Administración de perfiles`} />
            <Box>

                <Grid item lg={12} xl={12} m={1} position="absolute">
                    <Fondo />
                </Grid>

                <Grid container justifyContent={"center"} position={"relative"} top={79}>
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
                                                actionPerfiles(dataAction.action)
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
                    />
                    : null
            }
        </>

    )
}
export default AdmPerfiles