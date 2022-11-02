export enum TipoNotificacion {
    Proveddores = 1,
    Licitaciones = 2
}

export type DTOKeyValue = {
    id: number;
    nombre: string;
};

export interface UsuarioNotificacionDTO {
    id: number;
    nombres: string;
    correo: string;
    documento: string;
    cargo: string;
    celular: string;
}

export interface NotificacionDTO {

    usuario: number;
    categoria: number | null;
    constructora: number | null;
    zona: string;
    id: number;
}


export const INITIAL_NOTIFICACION: NotificacionDTO = {
    categoria: 0,
    constructora: 0,
    id: 0,
    usuario: 0,
    zona: ""
}

export interface ConsultarNotificacionDTO {
    usuario: UsuarioNotificacionDTO;
    constructora: DTOKeyValue | null;
    categoria: DTOKeyValue | null;
    zona: string;
    id: number;
}


export interface ErrorGuardarNotificacionDTO {
    hasError: boolean;
    msn: string;
}


export const INITIAL_ERROR_NOTIFICACION: ErrorGuardarNotificacionDTO = {

    hasError: false,
    msn: ""
}