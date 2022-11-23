
import { useState } from 'react';
import { MenuOptionContext } from "./menuOptionContext";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MenuOptionProvider = ({ children }: Props) => {

    const [stateAlert, setStateAlert] = useState("");

    const cambiarPathSelected = (path:string) => {
        setStateAlert(path);
    }

    return (


        <MenuOptionContext.Provider value={{ pathSelected: stateAlert ,cambiarPathSelected}}>


            {children}
        </MenuOptionContext.Provider>
    );
}