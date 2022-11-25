export interface NotificacionDTO {
    contNotificaciones: number;
    nombreConst: string;
    logoConst: string;
    constructoraId: number;
    tipo: tipoNovedad;
}

export type tipoNovedad =  "Proveddores" | "Licitaciones" ;
