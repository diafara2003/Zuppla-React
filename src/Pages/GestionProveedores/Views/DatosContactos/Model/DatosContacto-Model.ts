import { TerDatosContactoDTO } from "./DatosContactoDTO";

export type inputFormulario = {
    hasError: boolean, msn: string
}

export type validacionFormulario = {
    nombre:inputFormulario,
    documento: inputFormulario,
    email: inputFormulario
    telefono: inputFormulario,
    celular: inputFormulario,
    direccion: inputFormulario,
    cargo: inputFormulario,
    ciudad: inputFormulario        
}

export const INITIAL_STATE_CONTACTO :TerDatosContactoDTO = { 
    id: -1,
    terceroId: 0,
    tipoContactoId: 0,
    nombre: "",
    numeroDocumento: "",
    cargo: "",
    correo: "",
    direccion: "",
    ciudad:{id:0,nombre:''},
    telefono: "",
    celular: "",
    isNew:true
 }

 export const INITIAL_STATE_VALIDATION_CONTACTO = {
    nombre: { hasError: false, msn: '' },
    documento: { hasError: false, msn: '' },
    email: { hasError: false, msn: '' },
    telefono: { hasError: false, msn: '' },
    celular: { hasError: false, msn: '' },
    direccion: { hasError: false, msn: '' },
    cargo: { hasError: false, msn: '' },
    ciudad:{hasError: false, msn: ''}
    
}
export enum ActionContacto {
    Delete = "D",
    Edit = "E",
    New = "New contact",
    Default = "F",
    Historial = "H"
}