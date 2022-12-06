export interface NovedadDTO extends CheckedNovedad {

    comentario: string;
    fecha: Date;
    detalle: NovedadesDetDTO[] | null;
    constructora: string;
    numero: number;
    isActiva: boolean;
    visto: number;
    idConstructora: number;

}

export interface NovedadesDetDTO {
    tipoDocumento: number;
    nombre: string;
    tipo: string;
}



export interface CheckedNovedad {
    ischecked?: boolean;
}

