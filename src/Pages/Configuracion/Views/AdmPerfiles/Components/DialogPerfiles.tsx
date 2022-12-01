import { Avatar, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { APiMethod, requestAPI, RequestModel } from '../../../../../Provider'
import { PerfilConsultaDTO, typeModal, UsuariosSinPerfilDTO } from '../Model/AdmPerfil-Model'

type props = {
    OpenDialog: boolean,
    statePerfil: PerfilConsultaDTO,
    TipoModal: typeModal,
    handleCloseDialog: (dataClose: boolean) => void

}

export const DialogPerfiles = ({ OpenDialog, statePerfil, TipoModal, handleCloseDialog }: props) => {
    const [open, setOpen] = React.useState(OpenDialog);
    const [state, setState] = useState(statePerfil)
    const [stateUserPerfil, setStateUserPerfil] = useState<UsuariosSinPerfilDTO[]>([])
    const handleClose = () => {
        setOpen(false);
        handleCloseDialog(false);
    };

    const consulta = async () => {
        const request: RequestModel = {
            metodo: `Perfil/administracion/consulta?perfil=${state.id}`,
            type: APiMethod.GET
        }
        const response = await requestAPI<PerfilConsultaDTO[]>(request)!;
        console.log(response);
    }

    const consultaPerfil = async () => {
        const request: RequestModel = {
            metodo: 'Usuario/sinperfil',
            type: APiMethod.GET
        }
        const response = await requestAPI<UsuariosSinPerfilDTO[]>(request);
        setStateUserPerfil(response!);
        console.log(response);
    }

    useEffect(() => {
        consulta();
        consultaPerfil()
    }, [state])





    //Lista usuarios
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (value: number) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth={'md'}
        >
             <DialogTitle id="alert-dialog-title">
                {TipoModal == typeModal.edit? "Edicar perfil ":"Agregar perfil " }
            </DialogTitle> 
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item lg={3}>
                        {/* <Typography>Nombre del perfil</Typography> */}
                        <Box pt={1}>
                            <TextField
                                id="fieldTextNombre"
                                label="Nombre del perfil"
                                variant="outlined"
                                size='small'
                                value={state.nombre}
                                fullWidth
                            />
                        </Box>

                    </Grid>
                    <Grid item lg={9}>
                        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {stateUserPerfil.map((value) => {
                                const labelId = `checkbox-list-secondary-label-${value.id}`;
                                return (
                                    <ListItem
                                        key={value.id}
                                        secondaryAction={
                                            <Checkbox
                                                edge="end"
                                                onChange={handleToggle(value.id)}
                                                checked={checked.indexOf(value.id) !== -1}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        }
                                        disablePadding
                                    >
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt={`Avatar n°${value.id + 1}`}
                                                    src={`/static/images/avatar/${value.id + 1}.jpg`}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText id={labelId} primary={`${value.nombre}`} />
                                        </ListItemButton>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Grid>
                </Grid>
                <DialogContentText id="alert-dialog-description">

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant='text' color='error' onClick={handleClose}>Cancelar</Button>
                <Button variant='outlined' onClick={handleClose} autoFocus>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
