import { Alert, Box, Button, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AuthContext, ConstructoraDTO, INITIAL_STATE_CONSTRUCTORA } from '../../../../../../Auth'
import { ConstructoraNovDTO } from '../../../../../GestionProveedores/Components/SelectorConstructora/Model/Constructora-Model'
import { SelectConstructora } from '../../../../../GestionProveedores/Components/SelectorConstructora/View/SelectConstructora'
import CloseIcon from '@mui/icons-material/Close';
type props = {
    openD: boolean
}
export const DialogConst = ({ openD }: props) => {
    const { addConstructoraFilter } = useContext(AuthContext);
    const [open, setOpen] = useState(openD);
    const [openAlert, setOpenAlert] = useState(false);
    const [dataConst, setDataConst] = useState<ConstructoraNovDTO>();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        if (dataConst == undefined) {
            setOpenAlert(true)
        }
        else {
            let _Const: ConstructoraDTO = {
                baseURL: "", NIT: "", id: dataConst!.constructoraId,
                nombre: dataConst!.nombreConst, urlLogo: dataConst!.logoConst
            };
            addConstructoraFilter(_Const);
        }
    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" display={'flex'} justifyContent={'center'}>
                {"Seleccione una constructora"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <SelectConstructora onClick={(dataConst) => {
                        setDataConst(dataConst)
                    }} />
                </DialogContentText>
                <Box sx={{ width: '100%' }}>
                    <Collapse in={openAlert}>
                        <Alert
                            severity="warning"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpenAlert(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            sx={{ mb: 2 }}
                        >
                            Selecciona una constructora
                        </Alert>
                    </Collapse>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant='text' color='error' onClick={handleClose}>Cancelar</Button>
                <Button variant='outlined' onClick={handleClick} autoFocus>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
