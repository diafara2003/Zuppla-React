import { useState, useContext } from 'react';
import { APiMethod, requestAPI, RequestModel, ResponseDTO } from "../../../Provider";
import { ModelAlerta } from "../../../SharedComponents/Alert";
import { CambioClaveDTO } from "../../Login";
import { AlertContext } from '../../Menu/context/AlertContext';

interface showPassword {
    showPassOld: boolean;
    showPassNew: boolean;
    showPassNewR: boolean;
}



export const useCambiarClave = () => {

    const { showAlert, stateAlert } = useContext(AlertContext);
    const [formState, setFormState] = useState<CambioClaveDTO>({ PassNew: '', PassNewR: '', PassOld: '' });
    const [showPass, setshowPass] = useState<showPassword>({
        showPassNew: false,
        showPassNewR: false,
        showPassOld: false
    });
    const [isLoading, setisLoading] = useState(false);

    const onInputChange = (e: React.SyntheticEvent) => {
        const { name, value } = (e.target as HTMLInputElement);
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (formState.PassOld != '' && formState.PassNew != '' && formState.PassNewR != '') {

            const passValidate = validaCampos();

            if (passValidate.permite) {

                guardarCambios();
            }
            else {
                showAlert(passValidate.mensaje, "Cambiar contraseña", "warning")
            }

        }
    };

    const guardarCambios = async () => {
        setisLoading(true);
        const request: RequestModel = {
            metodo: `Account/cambioClave`,
            AllowAnonymous: false,
            type: APiMethod.POST,
            data: formState
        }
        const response = await requestAPI<ResponseDTO>(request)!;

        setisLoading(() => false);
        showAlert(response!.mensaje, "Cambiar contraseña", "warning")
    }


    const validaCampos = () => {
        let objMensaje = {
            mensaje: '',
            permite: true
        }
        if (formState.PassNew.replace(/ /g, "").length < 6 || formState.PassNewR.replace(/ /g, "").length < 6) {
            objMensaje.mensaje = 'La contraseña debe incluir minimo 6 caracteres'
            objMensaje.permite = false
            return objMensaje;
        }
        if (formState.PassNew.replace(/ /g, "").match(/[A-Z]/) == null || formState.PassNewR.replace(/ /g, "").match(/[A-Z]/) == null) {
            objMensaje.mensaje = 'La contraseña debe incluir un letra mayuscula'
            objMensaje.permite = false
            return objMensaje;
        }
        if (formState.PassNew.replace(/ /g, "").match(/[a-z]/) == null || formState.PassNewR.replace(/ /g, "").match(/[a-z]/) == null) {
            objMensaje.mensaje = 'La contraseña debe incluir un letra minuscula'
            objMensaje.permite = false
            return objMensaje;
        }
        if (formState.PassNew.replace(/ /g, "").match(/\d/) == null || formState.PassNewR.replace(/ /g, "").match(/\d/) == null) {
            objMensaje.mensaje = 'La contraseña debe incluir un numero'
            objMensaje.permite = false
            return objMensaje;
        }
        if (formState.PassNew != formState.PassNewR) {
            objMensaje.mensaje = 'La contraseñas no coinciden'
            objMensaje.permite = false
            return objMensaje;
        }
        return objMensaje;
    }

    const handleShowPassword = (name: string) => {
        type ObjectKey = keyof typeof showPass;

        const myVar = name as ObjectKey;
        setshowPass({
            ...showPass,
            [name]: !showPass[myVar]

        });
    }


    return {
        ...formState,
        showPass, handleShowPassword,
        onInputChange, handleSubmit, stateAlert,
        isLoading
    }
}