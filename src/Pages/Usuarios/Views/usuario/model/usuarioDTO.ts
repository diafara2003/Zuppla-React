
export interface UsuariosDTO {
    id: number;
    isPrincipal: boolean;
    tipo: string;
    correo: string;
    clave: string;
    estado: number;
    nombre: string;
    documento: string;
    cargo: string;
    celular: string;

}

export const INITIAL_USUARIO_DTO: UsuariosDTO = {
    cargo: "",
    celular: "",
    clave: "",
    correo: "",
    documento: "",
    estado: 1,
    id: 0,
    isPrincipal: false,
    nombre: "",
    tipo: ""
}

 export const INITIAL_VALIDATION_USUARIO = {
        email: { hasError: false, msn: '' },
        nombre: { hasError: false, msn: '' },
        cargo: { hasError: false, msn: '' },
        celular: { hasError: false, msn: '' },
        documento: { hasError: false, msn: '' },
    }

export enum ActionUser {
    Delete = "D",
    Edit = "E",
    Send = "S",
    Pass = "P",
    EstadoTrue = "Estado en true",
    EstadoFalse = "Estado en false",
    New = "New user",
    Default = "F"
}

export interface UsuarioIdDTO {
    idUsuario: number;
}

export interface CambiarEstadoUsuarioDTO {
    usuario: number;
    activo: boolean;
}

export type validacionFormulario = {
    email: inputFormulario,
    nombre: inputFormulario
    cargo: inputFormulario,
    celular: inputFormulario,
    documento: inputFormulario
}
type inputFormulario = {
    hasError: boolean, msn: string
}