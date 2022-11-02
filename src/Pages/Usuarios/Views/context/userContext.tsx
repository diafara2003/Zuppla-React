import { useReducer, useState } from "react";
import { APiMethod, requestAPI, ResponseDTO } from "../../../../Provider";
import { UsuariosDTO } from "../usuario/model/usuarioDTO";
import { storeUser, UserContext } from "../usuario/store/StoreUsuario";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(storeUser, { usuarios: [] });

    const [isLoading, setisLoading] = useState(false);
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

