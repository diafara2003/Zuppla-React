import { HeaderComponent } from '../../../../../SharedComponents/Header'
import { useUsuario } from '../hook/useUsuario';
import { useState } from 'react';
import { UserProvider } from '../../context/userContext';
import {UserLayout} from '../layout/UserLayout'

export const UsuarioPages = () => {

    const { data, isLoading, dataUserSelect, alertData, handleCloseDelete, openDelete, handleDeleteUser, actionUser, setDataNewUser } = useUsuario();
    const [openD, setOpen] = useState(false);
    const handleClickDialogOpen = () => {
        setOpen(true);
    };
    return (
        <>
            <HeaderComponent title={"Usuarios"} />
            <UserProvider>
              <UserLayout/>
            </UserProvider>
        </>
    )
}


export default UsuarioPages;