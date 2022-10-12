import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../../Auth';
import { APiMethod, requestAPI, RequestModel } from '../../../../../Provider';
import { ConstructoraDTO } from '../../../Components/SelectConstructora/Model/ModelConstructoras';
import { AdjuntosDTO, AdjuntoTerceroDTO } from '../Model/AdjuntosDTO';

export const ControllerDocumentosAdjuntos = () => {
    const { state } = useContext(AuthContext);
    const [dataDoc, setDocAdjuntos] = useState<AdjuntoTerceroDTO[]>();
    const [dataDocPorConst, setDataDocPorConst] = useState<AdjuntoTerceroDTO[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [dataConst, setDataConst] = useState<ConstructoraDTO>();
    // { id: 1, baseURL: '', nit: '', nombre: '', urlLogo: '' }

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

    const cargaDocumentosPorConst = async () => {

        const request: RequestModel = {
            AllowAnonymous: false,
            metodo: `DocumentosERP/requeridos?constructora=${dataConst?.id}`,
            type: APiMethod.GET
        }
        const response = await requestAPI<AdjuntoTerceroDTO[]>(request)!;        
        setDataDocPorConst(response??[])
        console.log(dataDocPorConst)
        setIsLoading(false)
    }

    useEffect(() => {
        cargaDocumentosAdjuntos();
    }, []);

     useEffect(() => {
         setIsLoading(true)
         cargaDocumentosPorConst();
    
     }, [dataConst])


    return { dataDoc, dataDocPorConst, isLoading, setDataConst }
}


