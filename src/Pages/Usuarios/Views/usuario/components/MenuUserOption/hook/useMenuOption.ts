import { useEffect ,useState} from "react";
import { ActionUser } from "../../../model/usuarioDTO";



type propsMenus = {

    opSelected: (action: ActionUser) => void,
    event: HTMLElement | null
}


export const useMenuOption = ({ opSelected, event }: propsMenus)=>{

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(event);

    const handleClose = () => {
        setAnchorEl(null);
        opSelected(ActionUser.close);
    };

    const clickAction = (action: ActionUser) => {
        setAnchorEl(null);
        opSelected(action);
    }

    useEffect(() => { setAnchorEl(event); }, [event])


    return {
        anchorEl,handleClose,clickAction
    }

}