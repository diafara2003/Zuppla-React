import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../../Auth';
import { APiMethod, RequestModel } from '../../../../../Provider/model/FetchModel';
import { requestAPI } from '../../../../../Provider/Requestfetch';
import { TerInformacionGeneralDTO } from '../../InformacionGeneral/Model/InformacionGeneral-model';
import { TerCamaraComercioDTO } from '../Model/CamaraComercio';

export const ControllerCamaraComercio = () => {
    const { state } = useContext(AuthContext);
    const [dataCamara, setDataCamaraComercio] = useState<TerCamaraComercioDTO[]>();    
    const [isLoading, setIsLoading] = useState(true);

    const cargaCamaraComercio = async () => {
        const request: RequestModel = {
          metodo: `TercerosGI/CamaraComercio?id=${state.user.idEmpresa}`,
          AllowAnonymous: false,
          type: APiMethod.GET
        }
        const response = await requestAPI<TerCamaraComercioDTO[]>(request)!;
        
        setDataCamaraComercio(response!)
        setIsLoading(false)
      }
    
    
  
    useEffect(() => {
        cargaCamaraComercio();     
    }, []);
  
  
    return { dataCamara, isLoading }
}
