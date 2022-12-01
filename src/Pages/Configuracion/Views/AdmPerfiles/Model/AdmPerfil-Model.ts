import { ResponseDTO } from "../../../../../Provider";
export enum ActionPerfil {
    Edit = "E",
    New = "N",
    Historial = "H",
    EstadoTrue = "Estado en true",
    EstadoFalse = "Estado en false",
    Default = "F"
}
export enum typeModal {
    add = 'add',
    edit = 'edit'
}

export const INITIAL_PERFIL: PerfilConsultaDTO = {
    countUsuarios: 0,
    estado: false,
    id: -1,
    nombre: ''
}
export interface PerfilDTO {
    id: number;
    nombre: string;
    estado: boolean;
}

export interface PerfilConsultaDTO extends PerfilDTO {
    countUsuarios: number;
}

export interface AgregarPerfilDTO {

    perfil: PerfilDTO;
    usuarios: number[];
}

export interface ResponseAgregarNivel {
    item1: ResponseDTO;
    item2: PerfilDTO;
}

export interface UsuariosSinPerfilDTO extends UsuariosDTO {
    sinPerfil:boolean;
    id:number;
    correo:string;
}

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
    celular:string;

}