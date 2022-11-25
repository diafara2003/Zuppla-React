import { useContext, useState } from 'react';
import { AuthContext } from '../../../../../Auth';
export const useMenuNotificacion = () => {

 
    const { notificacion } = useContext(AuthContext);
    return {

        ...notificacion
    }
}