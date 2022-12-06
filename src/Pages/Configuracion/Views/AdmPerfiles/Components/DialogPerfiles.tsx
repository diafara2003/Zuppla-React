import { Avatar, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Skeleton, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { APiMethod, requestAPI, RequestModel, ResponseDTO } from '../../../../../Provider'
import { SkeletonDinamic } from '../../../../../SharedComponents/Skeleton/view/SkeletonDynamic'
import { AlertContext } from '../../../../Menu/context/AlertContext'
import { AgregarPerfilDTO, INITIAL_PERFIL, PerfilConsultaDTO, PerfilDTO, typeModal, UsuariosDTO, UsuariosSinPerfilDTO } from '../Model/AdmPerfil-Model'

type props = {
    OpenDialog: boolean,
    statePerfil: PerfilConsultaDTO,
    TipoModal: typeModal,
    handleCloseDialog: (dataClose: boolean) => void

}

export const DialogPerfiles = ({ OpenDialog, statePerfil, TipoModal, handleCloseDialog }: props) => {
    const [open, setOpen] = React.useState(OpenDialog);
    const { showAlert, stateAlert } = useContext(AlertContext);
    const [state, setState] = useState(TipoModal == typeModal.edit ? statePerfil : INITIAL_PERFIL)
    const [stateUserPerfil, setStateUserPerfil] = useState<UsuariosDTO[]>([])
    const [filterUser, setfilterUser] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState({ nombre: { hasError: false, msn: '' } })

    //Lista usuarios
    const [checked, setChecked] = React.useState<number[]>([]);

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
    //Handles
    const onChangeFrm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState(prevState => {
            return { ...prevState, [name]: value }
        });
        console.log(state)
    }
    const handleClose = () => {
        setOpen(false);
        handleCloseDialog(false);
    };

    const handleChangeBuscar = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setfilterUser(value)
    }

    const handleAgregarPerfil = () => {
        if (state.nombre == '') {
            setError({nombre:{ hasError: true, msn: 'El nombre del perfil es obligatorio' }})
        }
        else{
            setError({nombre:{ hasError: false, msn: '' }})
            agregarPerfil();
        }
    }
    //API
    const consulta = async () => {
        const request: RequestModel = {
            metodo: `Perfil/administracion/consulta?perfil=${state.id}`,
            type: APiMethod.GET
        }
        const response = await requestAPI<{ item1: PerfilDTO, item2: number[] }>(request)!;
        console.log(response!.item2)
        setChecked(response!.item2)
    }

    const consultaUsers = async () => {
        const request: RequestModel = {
            metodo: "Usuario?tipo=p",
            type: APiMethod.GET,
        }
        const response = await requestAPI<UsuariosDTO[]>(request);
        setStateUserPerfil(response!);
        setIsLoading(false)
    }

    const agregarPerfil = async () => {
        setIsLoading(true)
        let _dataRequest: AgregarPerfilDTO = {
            perfil: state,
            usuarios: checked
        };

        const request: RequestModel = {
            metodo: "Perfil",
            type: APiMethod.POST,
            data: _dataRequest
        }
        const response = await requestAPI<{ item1: ResponseDTO; item2: PerfilDTO;}>(request);
        handleClose()
        if(response?.item1.success){
            showAlert('Perfil creado exitosamente','Administración de perfiles' , 'success');
        }
        else{
            showAlert('No se pudo crear el perfil','Administración de perfiles' , 'warning');
        }
        setIsLoading(false)
    }

    useEffect(() => {
        if (TipoModal == typeModal.edit)
            consulta();
        consultaUsers();
    }, [])





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
                {TipoModal == typeModal.edit ? "Editar perfil " : "Agregar perfil "}
            </DialogTitle>
            <DialogContent>
                {
                    isLoading ?
                        <SkeletonDinamic NoColumnas={1} NoFilas={4} Tipo={'formulario'} />
                        :
                        <Grid container spacing={2}>
                            <Grid item lg={3} justifyContent={'center'} display={'flex'} alignItems={'center'} sx={{ borderRight: '1px solid lightgray' }}>
                                {/* <Typography>Nombre del perfil</Typography> */}
                                <Box pr={1}>
                                    <TextField
                                        name="nombre"
                                        id="fieldTextNombre"
                                        label="Nombre del perfil"
                                        variant="outlined"
                                        size='small'
                                        value={state.nombre}
                                        onChange={onChangeFrm}
                                        error={error.nombre.hasError}
                                        helperText={error.nombre.msn}
                                        fullWidth
                                    />
                                </Box>

                            </Grid>
                            <Grid item lg={9}>
                                <Box pt={1}>
                                    <TextField
                                        id="fieldTextNombre"
                                        label="Filtrar usuario"
                                        variant="outlined"
                                        size='small'
                                        onChange={handleChangeBuscar}
                                        fullWidth

                                    />
                                </Box>
                                <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                    {stateUserPerfil
                                        .filter(c => c.nombre.toLowerCase().includes(filterUser.toLowerCase()))
                                        .map((value) => {
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
                                                                alt={`${value.nombre}`}
                                                                src="/"
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
                }

                <DialogContentText id="alert-dialog-description">
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant='text' color='error' onClick={handleClose}>Cancelar</Button>
                <Button variant='outlined' onClick={handleAgregarPerfil} autoFocus>
                    Aceptar {checked}
                </Button>
            </DialogActions>
        </Dialog>
    )
}
