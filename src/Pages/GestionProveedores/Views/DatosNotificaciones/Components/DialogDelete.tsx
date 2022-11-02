import { Dialog, DialogTitle, Typography, DialogContent, DialogContentText, Box, DialogActions, Button } from '@mui/material'
import { Eliminar } from '../../../Components/ImgComponents/View/Eliminar'
import { useState } from 'react';

type props = {

    title: string,
   
    handleOk: () => void
}

export const DialogDelete = ({ title,  handleOk }: props) => {


    const [open, setOpen] = useState(true);


    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={"md"}
        >
            <DialogTitle id="alert-dialog-title">
                <Typography>  {title} </Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Box justifyContent={'center'} display={"flex"}>
                        <Eliminar />
                    </Box>
                    <Typography>¿Esta seguro que desea eliminar el contacto ?</Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="text" onClick={() => setOpen(false)} >Cancelar</Button>

                <Button variant="contained" color="error" onClick={() => {
                    setOpen(false);
                    handleOk();

                }} autoFocus >
                    Eliminar
                </Button>

            </DialogActions>
        </Dialog>
    )
}
