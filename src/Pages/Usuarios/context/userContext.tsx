import { useContext, useReducer, useState } from "react";
import { APiMethod, requestAPI, ResponseDTO } from "../../../Provider";
import { AlertContext } from "../../Menu/context/AlertContext";
import { UsuariosDTO } from "../Views/usuario/model/usuarioDTO";
import { storeUser, UserContext } from "../Views/usuario/store/StoreUsuario";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(storeUser, { usuarios: [] });

    const [isLoading, setisLoading] = useState(false);
    const { showAlert } = useContext(AlertContext);

    const newUser = (user: UsuariosDTO) => {
        setisLoading(true);
        requestAPI<{ item1: ResponseDTO, item2: UsuariosDTO }>({
            metodo: "Usuario",
            type: APiMethod.POST,
            data: user
        }).then(response => {
            if (response?.item1.success == true) {
                dispatch({
                    type: user.id == 0 ? "add" : "edit",
                    payload: response.item2
                })
                showAlert(response?.item1?.mensaje!, "Exitoso", "success")
            }
            else{
                showAlert(response?.item1?.mensaje!, "Mensaje", "warning")
            }
            setisLoading(() => false);
        }).catch(() => {

        });
    }

    return (
        <UserContext.Provider value={{ state: state.usuarios, dispatch: dispatch, isloading: isLoading, newUser }}>
            {children}
        </UserContext.Provider>
    )
}

