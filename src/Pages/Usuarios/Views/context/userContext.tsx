import { useReducer } from "react";
import { storeUser, UserContext } from "../usuario/store/StoreUsuario";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(storeUser, { usuarios: [] });


    return (
        <UserContext.Provider value={{ state: state.usuarios, dispatch: dispatch }}>
            {children}
        </UserContext.Provider>
    )
}

