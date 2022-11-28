export interface APISincoDTO {
    fechai: string;
    fechaf: string;
    no: string;
    estado: number;
    solicitud: number;
}

export interface RequestAPiSincoDTO {
    parametro: APISincoDTO;
    constructora: number;
    informe: number;
}

export enum TipoInformeApiSincoDTO {
    OrdenCompra = 1,
    Contratos = 2
}

export interface InformeAPiSIncoDTOResponse {

    encabezado: columnas[];
    detalles: Object[];
}


export const INITIAL_InformeAPiSIncoDTOResponse: InformeAPiSIncoDTOResponse = {

    detalles: [],
    encabezado: []
}


export interface columnas {
    nombre: string;
    key: string;
    align: align;
    openLink: boolean;
    formatoNumerico: boolean;
}
type align = 'inherit' | 'left' | 'center' | 'right' | 'justify'; 