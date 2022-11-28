export interface APISincoDTO {
    fechai: string;
    fechaf: string;
    no: string;
    estado: number;
    solicitud: number;
}

export interface REquestAPiSincoDTO {
    parametro: APISincoDTO;
    constructora: number;
    informe: number;
}