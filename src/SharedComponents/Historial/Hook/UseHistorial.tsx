import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../../Auth';
import { APiMethod, requestAPI, RequestModel } from '../../../Provider';
import { AuditoriaGeneralDTO, TiposAuditoria, TiposHistorial } from '../Model/Historial-Model';

export const UseHistorial = (TipoAuditoria: TiposAuditoria,idDocumento:number, _isDelete: boolean, _isNew: boolean) => {
    const { storeUsuario } = useContext(AuthContext);
    const [stateTipo, setStateTipo] = useState<TiposHistorial>({ isDelete: false, isNew: true })
    const [stateAuditoria, setStateAuditoria] = useState<AuditoriaGeneralDTO[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    let _IdDoc =  idDocumento == -1 ? storeUsuario.user.idEmpresa:idDocumento;

    const ConsultarHistorial = async () => {        
        setIsLoading(true)
        const request: RequestModel = {
            metodo: `Auditoria/auditoriaGeneral?idTipoAuditoria=${TipoAuditoria}&documento=${_IdDoc}&isDelete=${stateTipo.isDelete}&isNew=${stateTipo.isNew}`,
            type: APiMethod.GET
        };
        const response = await requestAPI<AuditoriaGeneralDTO[]>(request)!;
        setStateAuditoria(response!);
        setIsLoading(false);
    }

    useEffect(() => {
        ConsultarHistorial();
        return () => {
        }
    }, [stateTipo])


    return ({ stateAuditoria, setStateTipo, isLoading })
}
