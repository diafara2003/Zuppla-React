import { useContext, useState } from 'react';
import { AuthContext } from '../../../../../Auth';
export const useMenuNotificacion = () => {

    const [countNotificacion, SetcountNotificacion] = useState(0);

    const { storeUsuario } = useContext(AuthContext);
    return {

        countNotificacion
    }
}