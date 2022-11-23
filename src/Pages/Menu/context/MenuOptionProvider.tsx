
import { useState } from 'react';
import { MenuOptionContext } from "./menuOptionContext";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MenuOptionProvider = ({ children }: Props) => {

    const [statepath, setStatepath] = useState("");

    const cambiarPathSelected = (path:string) => {
        setStatepath(path);
    }

    return (


        <MenuOptionContext.Provider value={{ pathSelected: statepath ,cambiarPathSelected}}>


            {children}
        </MenuOptionContext.Provider>
    );
}