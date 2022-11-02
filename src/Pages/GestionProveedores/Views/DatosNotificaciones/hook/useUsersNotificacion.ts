import { APiMethod, requestAPI, RequestModel, ResponseDTO } from "../../../../../Provider";
import { ConsultarNotificacionDTO, ErrorGuardarNotificacionDTO, INITIAL_ERROR_NOTIFICACION, NotificacionDTO, TipoNotificacion } from "../Model/TipoNotificacion";
import { useState } from 'react';

type ResponseNotificacion = {
    item1: ResponseDTO;
    item2: ConsultarNotificacionDTO;
};



export const useUsersNotificacion = (tipo: TipoNotificacion) => {

    const [lstNotificacion, setNotificacion] = useState<ConsultarNotificacionDTO[]>([]);
    const [error, setError] = useState<ErrorGuardarNotificacionDTO>(INITIAL_ERROR_NOTIFICACION)
    const [isLoading, setIsLoading] = useState(false);

    const handleAgregarNotificacion = async (info: NotificacionDTO) => {

        const request: RequestModel = {
            metodo: armarURL(),
            type: APiMethod.POST,
            data: info
        }
        const response = await requestAPI<ResponseNotificacion>(request)!;

        if (!response?.item1.success) {
            setError({ hasError: true, msn: response?.item1?.mensaje ?? "" })
        } else {
            setNotificacion([...lstNotificacion, response!.item2]);
        }

    }

    const consultarNotificacion = async () => {
        setIsLoading(true);
        const request: RequestModel = {
            metodo: armarURL(),
            type: APiMethod.GET
        }
        const response = await requestAPI<ConsultarNotificacionDTO[]>(request)!;


        if (response != null && response.length > 0)
            setNotificacion(response)
        setIsLoading(false);
    }

    const eliminarContacto = async (id: number) => {

        const request: RequestModel = {
            metodo: `ContactoNotificacion?id=${id}`,
            type: APiMethod.DELETE
        }
        await requestAPI<ConsultarNotificacionDTO[]>(request)!;

        return true;

    }

    const armarURL = () => {
        let _url = '';

        _url = `ContactoNotificacion/${tipo == TipoNotificacion.Licitaciones ? `licitaciones` : `proveedor`}`;

        return _url;
    }


    return { handleAgregarNotificacion, consultarNotificacion, eliminarContacto, lstNotificacion, error, isLoading }
}