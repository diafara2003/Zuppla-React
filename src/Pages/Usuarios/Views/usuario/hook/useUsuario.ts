import { useEffect, useRef, useState } from "react";
import { requestAPI } from "../../../../../Provider";
import { APiMethod, RequestModel, ResponseDTO } from "../../../../../Provider/model/FetchModel";
import { useFetch } from "../../../../../Provider/useFech";

import { ModelAlerta } from "../../../../../SharedComponents/Alert/View/Model/alertaModel";
import { ActionUser, CambiarEstadoUsuarioDTO, UsuarioIdDTO, UsuariosDTO } from "../model/usuarioDTO";

export const useUsuario = () => {

    const { hasError, data, isLoading, doFetch, setState } = useFetch<UsuariosDTO[] | null>();
    const [openDelete, setOpenDelete] = useState(false);
    const [alertData, setAlertData] = useState<ModelAlerta>({ msgBody: "", msgTitle: "", tipo: "info", estado: false })
    //const [dataUserSelect, setDataUserSelect] = useState<UsuariosDTO>();
    const dataUserSelect = useRef<UsuariosDTO>()
    const handleCloseDelete = () => {
        setOpenDelete(false);
    };
    const actionUser = (action: ActionUser) => {
        switch (action) {
            case ActionUser.Delete:
                console.log("Delete")
                setOpenDelete(true);
                break;
            case ActionUser.Edit:
                console.log("Edit")

                break;
            case ActionUser.Send:
                console.log("send email")
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

            default:
                break;
        }
    }

    const handleDeleteUser = async () => {
        setState({ isLoading: true, hasError: '' })
        // setOpenDelete(false);
        // const request: RequestModel = {
        //   AllowAnonymous: false,
        //   metodo: `TercerosGI/CamaraComercio/${dataIdDelete}`,
        //   type: APiMethod.DELETE
        // };
        // const response = await requestAPI<ResponseDTO>(request)!;
        // console.log(response)
        // if (response?.success){
        //  setDataCamaraComercio(prevState =>{
        //     // dataContactos?.filter(elemento=> elemento.id!=dataDeleteId)
        //     return [...prevState]?.filter(elemento=> elemento.id!=dataIdDelete)
        //   });
        //   setDataIdDelete(-1);
        // }else{
        //   console.log("no se pudo eliminar")
        // }
        setState({ isLoading: false, hasError: '' })
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
        if(response?.success){
            let newAlert: ModelAlerta={
                estado : true,
                msgBody :response.mensaje,
                msgTitle:"Exitoso",
                tipo: "success"
            };
            setAlertData(newAlert);
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
        if(response?.success){
            let newAlert: ModelAlerta={
                estado : true,
                msgBody :"Estado actualizado existosamente",
                msgTitle:"",
                tipo: "success"
            };
            setAlertData(newAlert);
        }
        console.log(response)
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
    useEffect(() => {
        doFetch({
            metodo: "Usuario?tipo=p",
            type: APiMethod.GET,
            AllowAnonymous: false
        });
    }, []);


    return { isLoading, data, openDelete, dataUserSelect,alertData, handleCloseDelete, handleDeleteUser, actionUser }

}