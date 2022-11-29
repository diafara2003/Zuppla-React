import { columnas, InformeAPiSIncoDTOResponse, INITIAL_InformeAPiSIncoDTOResponse, RequestAPiSincoDTO, TipoInformeApiSincoDTO } from "../model/modelInfAPiSinco"
import { useEffect, useState } from 'react';
import { APiMethod, requestAPI } from "../../../Provider";


export const useInformeAPiSinco = (tipo: TipoInformeApiSincoDTO) => {

    const [state, setState] = useState<InformeAPiSIncoDTOResponse>(INITIAL_InformeAPiSIncoDTOResponse);
    const [loading, setLoading] = useState(true);

    const consultarInfo = async () => {

        const request: RequestAPiSincoDTO = {

            constructora: 1,
            informe: parseInt(tipo.toString()),
            parametro: {
                estado: -1,
                fechaf: '',
                fechai: '',
                no: '',
                solicitud: 0,
            },
        };

        const response = await requestAPI<{detalles:string, encabezado:columnas[]}>({
            metodo: 'Informes',
            type: APiMethod.POST,
            data: request
        })!;

        if (response != null){
            debugger
            setState({...response, detalles:JSON.parse(response.detalles )});
        }
            

            setLoading(false);
    }


    useEffect(() => { consultarInfo(); }, []);

    return {
        state,
        loading
    }

}