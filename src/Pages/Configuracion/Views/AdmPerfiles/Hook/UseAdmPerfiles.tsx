import React, { useContext, useEffect, useState } from 'react'
import { APiMethod, requestAPI, RequestModel, ResponseDTO } from '../../../../../Provider';
import { AlertContext } from '../../../../Menu/context/AlertContext';
import { ActionPerfil, INITIAL_PERFIL, PerfilConsultaDTO, PerfilDTO, typeModal } from '../Model/AdmPerfil-Model';

export const UseAdmPerfiles = () => {

    const [statePerfil, setStatePerfil] = useState<PerfilConsultaDTO[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [statePerfilSelected, setStatePerfilSelected] = useState<PerfilConsultaDTO>(INITIAL_PERFIL)
    const { showAlert, stateAlert } = useContext(AlertContext);

    const [stateTipoModal, setStateTipoModal] = useState<typeModal>(typeModal.add)
    const [StateOpenDialog, setStateOpenDialog] = useState(false)


    const actionPerfiles = (action: ActionPerfil, _dataPerfil?: PerfilConsultaDTO) => {
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
                cambiarEstado(false, _dataPerfil!)
                break;
            case ActionPerfil.EstadoTrue:
                cambiarEstado(true, _dataPerfil!)
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

    const cambiarEstado = async (_estado: boolean, _dataPerfil: PerfilConsultaDTO) => {
        setIsLoading(true)
        
        // setStatePerfilSelected(prevState => {
        //     return { ...prevState, estado: _estado }
        // });       
        const request: RequestModel = {
            metodo: "Perfil/cambiarEstado",
            type: APiMethod.POST,
            data: _dataPerfil
        }
        const response = await requestAPI<ResponseDTO>(request);
        
        if (response?.success) {            
            setStatePerfil([...statePerfil.map(p=>{
                const _perfil = p
                if (_perfil.id == statePerfilSelected.id)
                    _perfil.estado = _estado
                return _perfil
            })])
            showAlert(response.mensaje=="" ? "Se actulizo el estado correctamente":response.mensaje, 'Administraci??n de perfiles', 'success');
        }
        else {            
            showAlert(response!.mensaje=="" ? "Se actulizo el estado correctamente":response!.mensaje, 'Administraci??n de perfiles', 'warning');
        }
        setIsLoading(false)
    }

    const actualizaStatePerfil = (_dataNew:PerfilDTO) => {
        let obj: PerfilConsultaDTO ={
            countUsuarios:0,
            estado:_dataNew.estado,
            id:_dataNew.id,
            nombre:_dataNew.nombre
        }
        if (stateTipoModal == typeModal.edit){
            setStatePerfil([...statePerfil.map(per => {
                let _per = per;
                if (_per.id == _dataNew.id) {
                    _per = obj
                }
                return _per
              })]);
        }
        else{
            setStatePerfil([...statePerfil, obj])
        }
    }
    useEffect(() => {
        consultar_perfiles();
    }, [])

    return (
        {
            statePerfil, isLoading, statePerfilSelected, stateTipoModal, StateOpenDialog,
            actionPerfiles, setStateTipoModal, setStateOpenDialog, setStatePerfilSelected, setStatePerfil,
            actualizaStatePerfil
        }
    )
}
