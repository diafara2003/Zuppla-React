import React, { useState } from 'react'
import { ActionPerfil, PerfilConsultaDTO } from '../../../Model/AdmPerfil-Model';

type typeAction = {
    action: ActionPerfil,
    perfilData: PerfilConsultaDTO;
}

type props = {   
    onClick: (data: typeAction) => void
}

export const useTablePerfil = ({ onClick }: props) => {

    const [userPerfilSelect, setUserPerfilSelect] = useState<PerfilConsultaDTO>()
    const [eventClick, seteventClick] = useState<HTMLElement | null>(null);
    const clickEstado = (event: React.ChangeEvent<HTMLInputElement>, perfil: PerfilConsultaDTO, _index: number) => {
        perfil.estado = event.target.checked;                
        event.target.checked == true ?
            onClick({ action: ActionPerfil.EstadoTrue, perfilData: perfil! })
            :
            onClick({ action: ActionPerfil.EstadoFalse, perfilData: perfil! });
    }

    const clickAction = (_action: ActionPerfil) => {
        seteventClick(null);
        onClick({ action: _action, perfilData: userPerfilSelect! });
    }

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleClick = (event: React.MouseEvent<HTMLElement>, _Pefil: PerfilConsultaDTO) => {
        setAnchorEl(event.currentTarget);
        seteventClick(event.currentTarget);
        setUserPerfilSelect(_Pefil);
        onClick({ action: ActionPerfil.Default, perfilData: _Pefil })
    };
  return (
    {
         clickEstado, handleClick, clickAction, eventClick,handleClose
    }
  )
}
