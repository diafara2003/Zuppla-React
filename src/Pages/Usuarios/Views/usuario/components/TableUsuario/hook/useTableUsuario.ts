import { UserContext } from '../../../store/StoreUsuario';
import { Action } from '@remix-run/router';
import React, { useContext, useState } from 'react'

import { ActionUser, UsuariosDTO } from '../../../model/usuarioDTO';

type typeAction = {
    action: ActionUser;
    userData: UsuariosDTO;
}


type props = {
    //datatable: UsuariosDTO[]
    onClick: (data: typeAction) => void
}

export const useTableUsuario = ({ onClick }: props) => {


    const { state } = useContext(UserContext);

    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [userDataSelect, setUser] = useState<UsuariosDTO>()
    const [userDataEntrante, setDataEntrante] = useState<UsuariosDTO[]>([...state])
    const open = Boolean(anchorEl);


    const handleClick = (event: React.MouseEvent<HTMLElement>, user: UsuariosDTO) => {
        setAnchorEl(event.currentTarget);
        setUser(user);
        onClick({ action: ActionUser.Default, userData: user })
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const clickAction = (action: ActionUser) => {
        onClick({ action: action, userData: userDataSelect! });
    }
    const clickEstado = (event: React.ChangeEvent<HTMLInputElement>, _user: UsuariosDTO, _index: number) => {
        event.target.checked == true ?
            onClick({ action: ActionUser.EstadoTrue, userData: _user! })
            :
            onClick({ action: ActionUser.EstadoFalse, userData: _user! });
    }

    return {
        state, clickEstado, handleClick, anchorEl, handleClose, open, clickAction,label

    }
}