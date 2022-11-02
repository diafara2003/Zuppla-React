import { Button, Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import { useState } from 'react';

import { INITIAL_NOTIFICACION, NotificacionDTO, TipoNotificacion } from '../Model/TipoNotificacion';
import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import { FrmUser } from './FrmUser';
import { FrmUserLicitacion } from './FrmUserLicitacion';
import { theme } from '../../../../../theme/theme';

type props = {
    tipoNotificacion: TipoNotificacion;
    title: string;
    handleOk: (newNotificacion: NotificacionDTO) => void;
    handleCancel: () => void;
}

export const NewNotificacionUser = ({ tipoNotificacion, title, handleOk, handleCancel }: props) => {
    const [open, setOpen] = useState(true);
    const [newData, setNewData] = useState<NotificacionDTO>(INITIAL_NOTIFICACION);



    const handleClose = (
        event: {},
        reason: "backdropClick" | "escapeKeyDown"
    ) => {
        if (reason === "backdropClick") {
            console.log(reason);
        } else {
            setOpen(false);
        }
    };



    return (
        <Dialog
            scroll={"paper"}
            disableEscapeKeyDown
            fullWidth={true}
            open={open}
            onClose={handleClose}
            onBackdropClick={() => false}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth={"md"}
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>

                {tipoNotificacion == TipoNotificacion.Proveddores
                    ? <FrmUser />
                    : <FrmUserLicitacion />
                }

            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={() => {
                    handleCancel();
                    setOpen(false);
                }} >Cancelar</Button>
                <LoadingButton
                    endIcon={<SaveIcon />}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        handleOk(newData);
                        setOpen(false);
                    }}
                >
                    Guardar
                </LoadingButton>
            </DialogActions>
        </Dialog>
    )
}
