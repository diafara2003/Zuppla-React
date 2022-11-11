import React, { useEffect, useRef, useState } from 'react'
import { requestAPI } from '../../../../../Provider';
import { APiMethod, RequestModel } from '../../../../../Provider/model/FetchModel';
import { ConstructoraNovDTO } from '../../../Components/SelectorConstructora/Model/Constructora-Model';
import { NovedadDTO } from '../Model/Novedades-Model';

export const useNovedades = () => {    
    const [dataNovedades, setDataNovedades] = useState<NovedadDTO[]>([])
    const consultarNovedades = async (_constructora:ConstructoraNovDTO) => {
        const request: RequestModel = {            
            metodo: `Novedad/constructora?constructora=${_constructora.constructoraId}`,
            type: APiMethod.GET
        }       
        const response = await requestAPI<NovedadDTO[]>(request)!;
        debugger
        setDataNovedades(response!);        

    }

    useEffect(() => {
        //cargaConstructoras();
    }, []);

    return {consultarNovedades, dataNovedades}
}