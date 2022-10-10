export interface AdjuntoTerceroDTO {

    tipoAdjunto: TipoAdjuntoTerceroDTO;
    adjunto: AdjuntosDTO;

}

export interface AdjuntosDTO{

    id:number;     
    nombre:string;
    extension:string;
}

export interface TipoAdjuntoTerceroDTO {
    id: number;
    nombre: string;
}