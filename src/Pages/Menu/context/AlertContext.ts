import { createContext } from "react";
import { colorLineProgress, ModelAlerta } from "../../../SharedComponents/Alert";

export const AlertContext = createContext({
    showAlert: (msgBody: string, msgTitle: string, tipo: colorLineProgress = "info") => { },
    stateAlert: { estado: false, msgBody: '', msgTitle: '', tipo: "error" },
    hideAlert: () => { }
} as IContextAlert);




export interface IContextAlert {
    stateAlert: ModelAlerta;
    showAlert: (msgBody: string, msgTitle: string, tipo: colorLineProgress) => void;
    hideAlert: () => void
}
