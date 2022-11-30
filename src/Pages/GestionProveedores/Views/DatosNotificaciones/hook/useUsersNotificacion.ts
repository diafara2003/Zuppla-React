import { APiMethod, requestAPI, RequestModel, ResponseDTO } from "../../../../../Provider";
import { ConsultarNotificacionDTO, ErrorGuardarNotificacionDTO, INITIAL_ERROR_NOTIFICACION, NotificacionDTO, TipoNotificacion } from "../Model/TipoNotificacion";
import { useContext, useState } from 'react';
import { AlertContext } from "../../../../Menu/context/AlertContext";

type ResponseNotificacion = {
    item1: ResponseDTO;
    item2: ConsultarNotificacionDTO;
};



export const useUsersNotificacion = (tipoNotificacion: TipoNotificacion) => {

    const [lstNotificacion, setNotificacion] = useState<ConsultarNotificacionDTO[]>([]);
    const [error, setError] = useState<ErrorGuardarNotificacionDTO>(INITIAL_ERROR_NOTIFICACION)
    const [isLoading, setIsLoading] = useState(false);
    const [tipo, setTipo] = useState(tipoNotificacion);
    const { showAlert, stateAlert } = useContext(AlertContext);

    const handleAgregarNotificacion = async (info: NotificacionDTO) => {        
        const request: RequestModel = {
            metodo: armarURL(),
            type: APiMethod.POST,
            data: info
        }
        const response = await requestAPI<ResponseNotificacion>(request)!;

        if (!response?.item1.success) {
            setError({ hasError: true, msn: response?.item1?.mensaje ?? "" })
            showAlert(response?.item1?.mensaje ?? "", "Datos notificaciones", 'warning')
        } else {
            setNotificacion([...lstNotificacion, response!.item2]);
            showAlert('Se creo el contacto exitosamente', "Datos notificaciones", 'success')
        }

    }

    const consultarNotificacion = async () => {
        setIsLoading(true);
        const request: RequestModel = {
            metodo: armarURL(),
            type: APiMethod.GET
        }
        const response = await requestAPI<ConsultarNotificacionDTO[]>(request)!;


        if (response != null)
            setNotificacion(() => response);
        else setNotificacion([]);


        setIsLoading(false);
    }

    const eliminarContacto = async (id: number) => {

        const request: RequestModel = {
            metodo: `ContactoNotificacion?id=${id}`,
            type: APiMethod.DELETE
        }
        const reponse = await requestAPI<ResponseDTO>(request)!;
        if (reponse?.success) {
            setNotificacion(() => [...lstNotificacion.filter(c => c.id != id)]);
            showAlert('Se ha eliminado el contacto exitosamente', "Datos notificaciones", 'success')
            return true;
        } else {
            showAlert('No se pudo eliminar el contacto', "Datos notificaciones", 'warning')
            return false;
        }
    }

    const armarURL = () => {
        let _url = '';

        _url = `ContactoNotificacion/${tipo == TipoNotificacion.Licitaciones ? `licitaciones` : `proveedor`}`;

        return _url;
    }


    return { handleAgregarNotificacion, consultarNotificacion, eliminarContacto, lstNotificacion, error, isLoading, setTipo }
}