import React, { useContext, useEffect, useState } from 'react'
import { APiMethod, requestAPI, RequestModel, ResponseDTO } from '../../../../../../../Provider';
import { AlertContext } from '../../../../../../Menu/context/AlertContext';
import { AgregarPerfilDTO, INITIAL_PERFIL, PerfilConsultaDTO, PerfilDTO, typeModal, UsuariosDTO } from '../../../Model/AdmPerfil-Model';


type props = {
    OpenDialog: boolean,
    statePerfil: PerfilConsultaDTO,
    TipoModal: typeModal,
    handleCloseDialog: (dataClose: boolean) => void
    handleSubmit :(dataPerfil:PerfilDTO) => void
}
export const useDialogPerfiles = ({ OpenDialog, statePerfil, TipoModal, handleCloseDialog, handleSubmit }: props) => {

    const [open, setOpen] = React.useState(OpenDialog);
    const { showAlert, stateAlert } = useContext(AlertContext);
    const [state, setState] = useState(TipoModal == typeModal.edit ? statePerfil : INITIAL_PERFIL)
    const [stateUserPerfil, setStateUserPerfil] = useState<UsuariosDTO[]>([])
    const [filterUser, setfilterUser] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState({ nombre: { hasError: false, msn: '' } })

    //Lista usuarios
    const [checkedUsers, setCheckedUsers] = React.useState<number[]>([]);

    const handleCheckUser = (value: number) => () => {
        const currentIndex = checkedUsers.indexOf(value);
        const newChecked = [...checkedUsers];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setCheckedUsers(newChecked);
    };
    //Handles
    const onChangeFrm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState(prevState => {
            return { ...prevState, [name]: value }
        });
        console.log(state)
    }
    const handleClose = () => {
        setOpen(false);
        handleCloseDialog(false);
    };

    const handleChangeBuscar = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setfilterUser(value)
    }

    const handleAgregarPerfil = () => {
        if (state.nombre == '') {
            setError({ nombre: { hasError: true, msn: 'El nombre del perfil es obligatorio' } })
        }
        else {
            setError({ nombre: { hasError: false, msn: '' } })
            agregarPerfil();
        }
    }
    //API
    const consulta = async () => {
        const request: RequestModel = {
            metodo: `Perfil/administracion/consulta?perfil=${state.id}`,
            type: APiMethod.GET
        }
        const response = await requestAPI<{ item1: PerfilDTO, item2: number[] }>(request)!;
        setCheckedUsers(response!.item2)
    }

    const consultaUsers = async () => {
        const request: RequestModel = {
            metodo: "Usuario?tipo=p",
            type: APiMethod.GET,
        }
        const response = await requestAPI<UsuariosDTO[]>(request);
        setStateUserPerfil(response!);
        setIsLoading(false)
    }

    const agregarPerfil = async () => {
        setIsLoading(true)
        let _dataRequest: AgregarPerfilDTO = {
            perfil: state,
            usuarios: checkedUsers
        };

        const request: RequestModel = {
            metodo: "Perfil",
            type: APiMethod.POST,
            data: _dataRequest
        }
        const response = await requestAPI<{ item1: ResponseDTO; item2: PerfilDTO; }>(request);
        handleClose()
        if (response?.item1.success) {
            showAlert(response?.item1.mensaje, 'Administración de perfiles', 'success');                        
            handleSubmit(response?.item2)
        }
        else {
            showAlert(response!.item1.mensaje, 'Administración de perfiles', 'warning');
        }
        setIsLoading(false)
    }

    useEffect(() => {
        if (TipoModal == typeModal.edit)
            consulta();
        consultaUsers();
    }, [])

    return (
        {
            open, handleClose, isLoading, state, onChangeFrm, error, handleChangeBuscar, stateUserPerfil, filterUser, handleCheckUser, checkedUsers,
            handleAgregarPerfil
        }
    )
}
