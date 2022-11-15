import { useContext, useRef, useState } from "react";
import { requestAPI } from "../../../../../Provider";
import { APiMethod, RequestModel, ResponseDTO } from "../../../../../Provider/model/FetchModel";
import { useFetch } from "../../../../../Provider/useFech";

import { AlertContext } from "../../../../Menu/context/AlertContext";
import { typeModal } from "../components/FrmNewUser";
import { ActionUser, CambiarEstadoUsuarioDTO, UsuarioIdDTO, UsuariosDTO } from "../model/usuarioDTO";
import { UserContext } from "../store/StoreUsuario";

export const useUsuario = () => {

    const { showAlert } = useContext(AlertContext);

    const { data, isLoading, setState } = useFetch<UsuariosDTO[] | null>();
    const [openDelete, setOpenDelete] = useState(false);

    const { dispatch, newUser } = useContext(UserContext);
    const [openD, setOpen] = useState(false);
    const [tipoModal, setTipoModal] = useState(typeModal.add)

    const dataUserSelect = useRef<UsuariosDTO>()
    const handleCloseDelete = () => {
        setOpenDelete(false);
    };
    const handleClickDialogOpenAdd = () => {
        setTipoModal(typeModal.add);
        setOpen(true);
    };
    const handleClickDialogOpenEdit = () => {
        setTipoModal(typeModal.edit);
        setOpen(true);

    };
    const actionUser = (action: ActionUser) => {
        switch (action) {
            case ActionUser.Delete:
                setOpenDelete(true);
                break;
            case ActionUser.Edit:
                // let _editUser = state.find((element) => element.id == dataUserSelect.current?.id)
                //setDataEditUser(_editUser);
                handleClickDialogOpenEdit();
                break;
            case ActionUser.Send:

                sendMail()
                break;
            case ActionUser.EstadoTrue:
                cambiarEstado(true)
                break;
            case ActionUser.EstadoFalse:
                cambiarEstado(false)
                break;
            case ActionUser.Pass:
                resetPassword();
                break;
            case ActionUser.New:
            default:
                break;
        }
    }


    const sendMail = async () => {
        setState({ isLoading: true, hasError: '' })
        let usuario: UsuarioIdDTO = {
            idUsuario: dataUserSelect.current?.id!
        };
        const request: RequestModel = {
            metodo: 'Usuario/envioCorreo',
            type: APiMethod.POST,
            data: usuario
        };
        const response = await requestAPI<ResponseDTO>(request)!;
        console.log(response)
        if (response?.success) {
            showAlert(response.mensaje, "Exitoso", "success")
        }
        setState({ isLoading: false, hasError: '' })
    }

    const cambiarEstado = async (_estado: boolean) => {
        setState({ isLoading: true, hasError: '' })
        let estadoUser: CambiarEstadoUsuarioDTO = {
            usuario: dataUserSelect?.current?.id!,
            activo: _estado
        };
        const request: RequestModel = {
            metodo: `Usuario/cambiarestado`,
            type: APiMethod.POST,
            data: estadoUser
        };
        const response = await requestAPI<ResponseDTO>(request)!;
        if (response?.success) {
            dispatch({
                type: "cambia estado",
                payload: { _id: dataUserSelect?.current!.id, estado: _estado ? 1 : 0 }
            });
            showAlert("Estado actualizado existosamente", "Exitoso", "success")
        }
        setState({ isLoading: false, hasError: '' })

    }

    const resetPassword = async () => {
        setState({ isLoading: true, hasError: '' })
        let usuario: UsuarioIdDTO = {
            idUsuario: dataUserSelect.current?.id!
        };
        const request: RequestModel = {
            metodo: 'Usuario/resetPassword',
            type: APiMethod.POST,
            data: usuario
        };
        const response = await requestAPI<ResponseDTO>(request)!;
        console.log(response)

        setState({ isLoading: false, hasError: '' })
    }

    return {
        isLoading, data, openDelete, dataUserSelect, openD, tipoModal,
        handleCloseDelete, newUser, actionUser, handleClickDialogOpenAdd, handleClickDialogOpenEdit, setOpen
    }

}