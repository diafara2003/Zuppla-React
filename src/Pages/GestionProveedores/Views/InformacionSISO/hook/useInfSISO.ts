import { useEffect, useState } from 'react';
import { RequestModel, APiMethod, requestAPI, ResponseDTO } from '../../../../../Provider';
import { InformacionSISO_DTO, INITIAL_SISO } from '../model/InfSISO-DTO';
export const useInfSISO = () => {


    const [state, setState] = useState<InformacionSISO_DTO>(INITIAL_SISO);


    const consultarInfo = async () => {
        const request: RequestModel = {
            metodo: `TercerosGI/informacionSISO`,
            type: APiMethod.GET,
        }
        const data = await requestAPI<InformacionSISO_DTO>(request);


        if (data != null) setState(data!);

    }

    const handleChecked = async (name: string, value: boolean) => {

        const info: InformacionSISO_DTO = { ...state, [name]: !value };

        const request: RequestModel = {
            metodo: `TercerosGI/informacionSISO`,
            type: APiMethod.POST,
            data: info
        }
        const data = await requestAPI<ResponseDTO>(request);

        if (data != null) setState({ ...info, id: data.codigo });

    }


    useEffect(() => {


        consultarInfo();

    }, []);

    return { state ,handleChecked}
}