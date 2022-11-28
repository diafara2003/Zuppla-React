import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../../Auth';
import { APiMethod, requestAPI, RequestModel } from '../../../Provider';
import { AuditoriaGeneralDTO, TiposAuditoria, TiposHistorial } from '../Model/Historial-Model';

type props = {
    onClose: (estado: boolean) => void,
    _tipoAuditoria: TiposAuditoria,
    idDocumento? :number
  }


export const UseHistorial = ({_tipoAuditoria,idDocumento,}:props) => {
    const { storeUsuario } = useContext(AuthContext);
    const [stateTipo, setStateTipo] = useState<TiposHistorial>({ isDelete: false, isNew: true })
    const [stateAuditoria, setStateAuditoria] = useState<AuditoriaGeneralDTO[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [valueTab, setValueTab] = useState(-1);
    const [documento, setDocumento] = useState( idDocumento == -1 ? storeUsuario.user.idEmpresa : idDocumento);

    const ConsultarHistorial = async () => {        
        setIsLoading(true)
        const request: RequestModel = {
            metodo: `Auditoria/auditoriaGeneral?idTipoAuditoria=${_tipoAuditoria}&documento=${documento}&isDelete=${stateTipo.isDelete}&isNew=${stateTipo.isNew}`,
            type: APiMethod.GET
        };
        const response = await requestAPI<AuditoriaGeneralDTO[]>(request)!;
        setStateAuditoria(response!);
        setIsLoading(false);
    }

    useEffect(() => {
        ConsultarHistorial();
      
    }, [stateTipo])


    useEffect(() => {
        setDocumento(idDocumento == -1 ? storeUsuario.user.idEmpresa : idDocumento);
        setStateTipo({ isDelete: false, isNew: true })
    }, [idDocumento])


    const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
        //TAB INSERCION
        if (newValue == 0) {
          setStateTipo({ isDelete: false, isNew: true })
        }
        //TAB MODIFICACION
        if (newValue == 1) {
          setStateTipo({ isDelete: false, isNew: false })
        }
        //TAB ELIMINACION
        if (newValue == 2) {
          setStateTipo({ isDelete: true, isNew: false })
        }
        setValueTab(newValue);
      };
    

    return ({ stateAuditoria, setStateTipo, isLoading ,handleChangeTab ,valueTab})
}
