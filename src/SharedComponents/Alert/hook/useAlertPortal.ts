import { useContext, useEffect, useState } from 'react'
import { AlertContext } from '../../../Pages/Menu/context/AlertContext';



export const useAlertPortal = () => {
    const duracion = 5000;

    const {  stateAlert, hideAlert } = useContext(AlertContext);
    const [linealBar, setLinealBar] = useState(0);

    useEffect(() => {
         const inter = setInterval(function () {
            setLinealBar((currentNumber) => currentNumber + 1)
        }, 90);
        setTimeout(() => {
            hideAlert();
            clearInterval(inter);
        }, duracion);
    }, [])

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        
        hideAlert();
    };

return {

    handleClose, linealBar, ...stateAlert
}
}