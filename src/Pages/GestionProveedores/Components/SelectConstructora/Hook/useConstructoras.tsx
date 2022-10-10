import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../../Auth';
import { APiMethod, requestAPI, RequestModel } from '../../../../../Provider';
import { ConstructoraDTO } from '../Model/ModelConstructoras';

export const useConstructoras = () => {
    const { state } = useContext(AuthContext);
    const [dataConst, setdataConst] = useState<ConstructoraDTO[]>();    
    const [isLoading, setIsLoading] = useState(true);

    const cargaConstructoras = async () => {
       
        const request: RequestModel = {
            AllowAnonymous: false,
            metodo: `Constructora`,
            type: APiMethod.GET
        }
        const response = await requestAPI<ConstructoraDTO[]>(request)!;      
        setdataConst(response!)
        setIsLoading(false)
      }   
    
    useEffect(() => {
        cargaConstructoras();     
    }, []);
  return {dataConst, isLoading}
}
