import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../../Auth';
import { APiMethod, requestAPI, RequestModel } from '../../../Provider';
import { AuditoriaGeneralDTO, TiposAuditoria, TiposHistorial } from '../Model/Historial-Model';

export const UseHistorial = (TipoAuditoria: TiposAuditoria, _isDelete: boolean, _isNew: boolean) => {
    const { storeUsuario } = useContext(AuthContext);
    const [stateTipo, setStateTipo] = useState<TiposHistorial>({ isDelete: false, isNew: true })
    const [stateAuditoria, setStateAuditoria] = useState<AuditoriaGeneralDTO[]>([]);

    const ConsultarHistorial = async () => {
        const request: RequestModel = {
            metodo: `Auditoria/auditoriaGeneral?idTipoAuditoria=${TipoAuditoria}&documento=${storeUsuario.user.idEmpresa}&isDelete=${stateTipo.isDelete}&isNew=${stateTipo.isNew}`,
            type: APiMethod.GET
        };
        const response = await requestAPI<AuditoriaGeneralDTO[]>(request)!;
        setStateAuditoria(response!);
    }

    useEffect(() => {
        ConsultarHistorial();
        return () => {
        }
    }, [stateTipo])


    return ({ stateAuditoria, setStateTipo })
}
