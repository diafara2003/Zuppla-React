
export interface UsuariosDTO {
    id: number;
    isPrincipal: boolean;
    tipo: string;
    correo: string;
    clave: string;
    estado: boolean;
    nombre: string;
    documento: string;
    cargo: string;
    celular:string;

}

export enum ActionUser {
    Delete = "D",
    Edit = "E",
    Send = "S",
    Pass = "P",
    EstadoTrue = "Estado en true",
    EstadoFalse = "Estado en false",
    Default = "F"
}

export interface UsuarioIdDTO {
    idUsuario : number;
}

export interface CambiarEstadoUsuarioDTO {
    usuario: number;
    activo: boolean;
}