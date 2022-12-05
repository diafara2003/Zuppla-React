import React, { useContext, useEffect, useState } from 'react'
import { APiMethod, requestAPI, RequestModel, ResponseDTO } from '../../../../../Provider';
import { AlertContext } from '../../../../Menu/context/AlertContext';
import { ActionPerfil, INITIAL_PERFIL, PerfilConsultaDTO, typeModal } from '../Model/AdmPerfil-Model';

export const UseAdmPerfiles = () => {

    const [statePerfil, setStatePerfil] = useState<PerfilConsultaDTO[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [statePerfilSelected, setStatePerfilSelected] = useState<PerfilConsultaDTO>(INITIAL_PERFIL)
    const { showAlert, stateAlert } = useContext(AlertContext);

    const [stateTipoModal, setStateTipoModal] = useState<typeModal>(typeModal.add)
    const [StateOpenDialog, setStateOpenDialog] = useState(false)
    const actionPerfiles = (action: ActionPerfil) => {
        switch (action) {
            case ActionPerfil.New:
                setStateTipoModal(typeModal.add)
                setStateOpenDialog(true)
                break;
            case ActionPerfil.Edit:
                setStateTipoModal(typeModal.edit)
                setStateOpenDialog(true)
                break;
            case ActionPerfil.EstadoFalse:
                cambiarEstado(false)
                break;
            case ActionPerfil.EstadoTrue:
                cambiarEstado(true)
                break;
            default:
                break;
        }
    }
    async function consultar_perfiles() {
        const request: RequestModel = {
            metodo: `Perfil/administracion`,
            type: APiMethod.GET
        }
        const response = await requestAPI<PerfilConsultaDTO[]>(request)!;
        setStatePerfil(response!);
        setIsLoading(false)
    }

    const cambiarEstado = async (_estado: boolean) => {
        setIsLoading(true)
        debugger
        // setStatePerfilSelected(prevState => {
        //     return { ...prevState, estado: _estado }
        // });
        const request: RequestModel = {
            metodo: "Perfil/cambiarEstado",
            type: APiMethod.POST,
            data: statePerfilSelected
        }
        const response = await requestAPI<ResponseDTO>(request);
        debugger
        if (response?.success) {            
            setStatePerfil([...statePerfil.map(p=>{
                const _perfil = p
                if (_perfil.id == statePerfilSelected.id )
                     _perfil.estado = _estado     
                return _perfil
            })])
            
            showAlert('Estado actualizado', 'Administración de perfiles', 'success');

        }
        else {
            showAlert('No se pudo actualizar el estado', 'Administración de perfiles', 'warning');
        }
        setIsLoading(false)
    }
    useEffect(() => {
        consultar_perfiles();
    }, [])

    return (
        { statePerfil, isLoading, statePerfilSelected, stateTipoModal, StateOpenDialog, actionPerfiles, setStateTipoModal, setStateOpenDialog, setStatePerfilSelected }
    )
}
