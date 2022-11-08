import { useEffect, useState } from 'react'
import { ModelAlerta } from '..';



export const useAlertPortal = (data: ModelAlerta) => {
    const duracion = 5000;

    const [open, setOpen] = useState<boolean>(data.estado);
    const [linealBar, setLinealBar] = useState(0);

    useEffect(() => {
        const inter = setInterval(function () {
            setLinealBar((currentNumber) => currentNumber + 1)
        }, 90);
        setTimeout(() => {
            setOpen(false)
            clearInterval(inter);
        }, duracion);
    }, [])

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return {

        open, handleClose, linealBar
    }
}