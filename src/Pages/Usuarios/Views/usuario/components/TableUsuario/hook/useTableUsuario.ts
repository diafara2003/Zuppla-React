import { UserContext } from '../../../store/StoreUsuario';
import { Action } from '@remix-run/router';
import React, { useContext, useState } from 'react'

import { ActionUser, UsuariosDTO } from '../../../model/usuarioDTO';
import { ConstructionOutlined } from '@mui/icons-material';

type typeAction = {
    action: ActionUser;
    userData: UsuariosDTO;
}


type props = {
    //datatable: UsuariosDTO[]
    onClick: (data: typeAction) => void
}

export const useTableUsuario = ({ onClick }: props) => {

    const [selectedId, setId] = useState(-1);
    const [eventClick, seteventClick] = useState<HTMLElement | null>(null);
    const { state } = useContext(UserContext);
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const handleClick = (event: React.MouseEvent<HTMLElement>, user: UsuariosDTO) => {

        seteventClick(event.currentTarget);
        setId(user.id);
    };

    const clickAction = (action: ActionUser) => {

        seteventClick(null);
        if (action != ActionUser.close)
            onClick({ action: action, userData: state.find(c => c.id == selectedId)! });

    }
    const clickEstado = (event: React.ChangeEvent<HTMLInputElement>, _user: UsuariosDTO, _index: number) => {
        event.target.checked == true ?
            onClick({ action: ActionUser.EstadoTrue, userData: _user! })
            :
            onClick({ action: ActionUser.EstadoFalse, userData: _user! });
    }

    return {
        state, clickEstado, handleClick, clickAction, label, selectedId, eventClick

    }
}