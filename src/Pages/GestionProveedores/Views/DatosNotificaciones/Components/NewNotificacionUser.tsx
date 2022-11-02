import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';

import { INITIAL_NOTIFICACION, NotificacionDTO, TipoNotificacion } from '../Model/TipoNotificacion';
import SaveIcon from '@mui/icons-material/Save';
import { LoadingButton } from '@mui/lab';
import { FrmUser } from './FrmUser';
import { FrmUserLicitacion } from './FrmUserLicitacion';

type props = {
    tipoNotificacion: TipoNotificacion;
    title: string;
    handleOk: (newNotificacion: NotificacionDTO) => void;
}

export const NewNotificacionUser = ({ tipoNotificacion, title, handleOk }: props) => {
    const [open, setOpen] = useState(true);
    const [newData, setNewData] = useState<NotificacionDTO>(INITIAL_NOTIFICACION);

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
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
                <Button variant="outlined" onClick={() => setOpen(false)} >Cancelar</Button>
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
