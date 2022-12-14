import React, { useEffect, useState } from 'react'
import { ActionPerfil } from '../../../Model/AdmPerfil-Model';

type propsMenus = {
    opSelected: (action: ActionPerfil) => void,
    event: HTMLElement | null
}

export const usePerfilOption = ({ opSelected, event }: propsMenus) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(event);

    const handleClose = () => {
        setAnchorEl(null);
        opSelected(ActionPerfil.close);
    };

    const clickAction = (action: ActionPerfil) => {
        setAnchorEl(null);
        opSelected(action);
    }

    useEffect(() => { setAnchorEl(event); }, [event])


    return {
        anchorEl,handleClose,clickAction
    }
  return (
    { anchorEl,handleClose,clickAction}
  )
}
