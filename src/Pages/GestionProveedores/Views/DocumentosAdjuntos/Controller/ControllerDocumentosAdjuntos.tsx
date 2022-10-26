import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../../Auth';
import { APiMethod, requestAPI, RequestModel } from '../../../../../Provider';
import { ConstructoraDTO } from '../../../Components/SelectConstructora/Model/ModelConstructoras';
import { adjuntoCompleteERP, AdjuntosDTO, AdjuntoTerceroDTO, DocumentosRequeridosERPDTO } from '../Model/AdjuntosDTO';

export const ControllerDocumentosAdjuntos = () => {
    const { storeUsuario } = useContext(AuthContext);
    const [dataDoc, setDocAdjuntos] = useState<AdjuntoTerceroDTO[]>();    
    const [isLoading, setIsLoading] = useState(true);
    const [dataConst, setDataConst] = useState<ConstructoraDTO>();
    const [dataAdjPorConst, setDataAdjPorConst] = useState<adjuntoCompleteERP[]>([]);
    // { id: 1, baseURL: '', nit: '', nombre: '', urlLogo: '' }
    
    const cargaDocumentosAdjuntos = async () => {
        const request: RequestModel = {
            AllowAnonymous: false,
            metodo: `documentos/tercero?id=${storeUsuario.user.idEmpresa}`,
            type: APiMethod.GET
        }
        const response = await requestAPI<AdjuntoTerceroDTO[]>(request)!;

        setDocAdjuntos(response!)
        setIsLoading(false)
    }

    const cargaDocumentosPorConst = async () => {        
        
        if(dataConst!= undefined){
            const request: RequestModel = {
                AllowAnonymous: false,
                metodo: `DocumentosERP/requeridos?constructora=${dataConst?.id}`,
                type: APiMethod.GET
            }
            const response = await requestAPI<DocumentosRequeridosERPDTO[]>(request)!;            
            const _lstAjuntosPerConst: adjuntoCompleteERP[] = await filtraTipoAdjunto(response!);   
            setDataAdjPorConst(_lstAjuntosPerConst);     
            // console.log(_lstAjuntosPerConst);            
            console.log(dataAdjPorConst);              
        }
        setIsLoading(false);           
    }
    const filtraTipoAdjunto = async (_adjuntosERP: DocumentosRequeridosERPDTO[]) => {
        let adjuntosPerConst: adjuntoCompleteERP = {
            tiposAdjuntos: [],
            especialidad: 0,
            nombreEspecialidad: ""
        };

        let _listaAdjuntos: adjuntoCompleteERP[] = [];
        _adjuntosERP?.forEach(adj => {
            let indexEsp = _listaAdjuntos.findIndex(elemento => elemento.especialidad == adj.especialidad);

            if (indexEsp != -1) {
                _listaAdjuntos[indexEsp].tiposAdjuntos.push(dataDoc!.filter(elementAd => elementAd.tipoAdjunto.id == adj.tipoAdjunto)[0]);
            }
            else {
                adjuntosPerConst = {
                    especialidad: adj.especialidad,
                    nombreEspecialidad: adj.nombreEspecialidad,
                    tiposAdjuntos: dataDoc!.filter(elementAd => elementAd.tipoAdjunto.id == adj.tipoAdjunto)
                }
                _listaAdjuntos.push(adjuntosPerConst);
            }
        });
       
        return _listaAdjuntos;
    }
    useEffect(() => {
        cargaDocumentosAdjuntos();
    }, []);


    useEffect(() => {
        setIsLoading(true) 
        cargaDocumentosPorConst() 
        
    }, [dataConst])


    return { dataDoc, dataAdjPorConst, isLoading, setDataConst }
}


