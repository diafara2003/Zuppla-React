import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../../Auth';
import { APiMethod, requestAPI, RequestModel } from '../../../../../Provider';
import { AdjuntosDTO, AdjuntoTerceroDTO } from '../Model/AdjuntosDTO';

export const ControllerDocumentosAdjuntos = () => {
    const { state } = useContext(AuthContext);
    const [dataDoc, setDocAdjuntos] = useState<AdjuntoTerceroDTO[]>();    
    const [isLoading, setIsLoading] = useState(true);

    const cargaDocumentosAdjuntos = async () => {
       
        const request: RequestModel = {
            AllowAnonymous: false,
            metodo: `documentos/tercero?id=${state.user.idEmpresa}`,
            type: APiMethod.GET
        }
        const response = await requestAPI<AdjuntoTerceroDTO[]>(request)!;
        
        setDocAdjuntos(response!)
        setIsLoading(false)
      }
    
    
  
    useEffect(() => {
        cargaDocumentosAdjuntos();     
    }, []);
  
  
    return { dataDoc, isLoading }
}


