import { createContext } from "react";


export const MenuOptionContext = createContext({
    pathSelected: "",
    cambiarPathSelected: (path:string) => { }
} as IContextAlert);




export interface IContextAlert {
    pathSelected: string;
    cambiarPathSelected: (path:string) => void
}
