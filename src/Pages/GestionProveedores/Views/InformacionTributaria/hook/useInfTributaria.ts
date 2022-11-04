import { useState, useEffect } from 'react';
import { RequestModel, APiMethod, requestAPI, ResponseDTO } from '../../../../../Provider';
import { InfTributariaDTO, INITIAL_INF_TRIBUTARIA } from '../model/InfTributariaDTO';
export const useInfTributaria = () => {

    const [state, setState] = useState<InfTributariaDTO>(INITIAL_INF_TRIBUTARIA);

    const consultarInfo = async () => {
        const request: RequestModel = {
            metodo: `TercerosGI/informaciontributaria`,
            type: APiMethod.GET,
        }
        const data = await requestAPI<InfTributariaDTO>(request);


        if (data != null) setState(data!);

    }

    const handleChecked = async (name: string, value: boolean) => {

        const info: InfTributariaDTO = { ...state, [name]: !value };

        const request: RequestModel = {
            metodo: `TercerosGI/informaciontributaria`,
            type: APiMethod.POST,
            data: info
        }
        const data = await requestAPI<ResponseDTO>(request);

        if (data != null) setState({ ...info, id: data.codigo });

    }

    useEffect(() => {


        consultarInfo();

    }, []);


    return {


        state, handleChecked
    }
}