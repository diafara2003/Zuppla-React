import { colorLineProgress, ModelAlerta } from "../../../SharedComponents/Alert";
import { AlertContext } from './AlertContext';
import { useState } from 'react';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const AlertProvider = ({ children }: Props) => {

    const [stateAlert, setStateAlert] = useState<ModelAlerta>({

        estado: false, msgBody: '', msgTitle: '', tipo: "info"
    });


    const showAlert = (msgBody: string, msgTitle: string, tipo: colorLineProgress = "info") => {

        setStateAlert({ estado: true, msgBody, msgTitle, tipo })
    }


    const hideAlert = () => {

        setStateAlert({ ...stateAlert, estado: false })
    }

    return (


        <AlertContext.Provider value={{ stateAlert, showAlert,hideAlert }}>
            {children}
        </AlertContext.Provider>
    );
}