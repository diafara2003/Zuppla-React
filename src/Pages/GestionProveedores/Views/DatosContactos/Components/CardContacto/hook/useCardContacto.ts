import { useState } from "react";
import { ActionContacto } from "../../../Model/DatosContacto-Model";
import { TerDatosContactoDTO } from "../../../Model/DatosContactoDTO";

type props = {
    contacto: TerDatosContactoDTO,
    // valorDelete: (valorId: number) => void,
    // action: (actionContacto: string) => void
    onChangeAction: (data: typeAction) => void
}


type typeAction = {
    action: ActionContacto;
    contacto: TerDatosContactoDTO;
}



export const useCardContacto = ({ contacto, onChangeAction }: props)=>{


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const clickAction = (actionSelect: ActionContacto, contactoSelect: TerDatosContactoDTO) => {
        
        onChangeAction({
            action: actionSelect,
            contacto: contactoSelect
        });
    };
    return {

        anchorEl,
        contacto,
        handleClose,
        open,
        clickAction,
        handleClick
    }
}