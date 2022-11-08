import React, { useEffect, useState } from 'react'
import { RequestModel, APiMethod, requestAPI } from '../../../../../Provider';
import { ConstructoraNovDTO } from '../Model/Constructora-Model';


export const useSelectConstuctora = () => {
    const [dataConst, setdataConst] = useState<ConstructoraNovDTO[]>();
    const [isLoading, setIsLoading] = useState(true);
  
    const cargaConstructoras = async () => {
  
      const request: RequestModel = {
        AllowAnonymous: false,
        metodo: `Novedad/ConstructoraNovedad`,
        type: APiMethod.GET
      }
      const response = await requestAPI<ConstructoraNovDTO[]>(request)!;      
      setdataConst(response!)
      setIsLoading(false)
    }
  
    useEffect(() => {
      cargaConstructoras();
    }, []);
    return { dataConst: dataConst ?? [], isLoading }
}
