export interface NotificacionDTO {
    contNotificaciones: number;
    nombreConst: string;
    logoConst: string;
    constructoraId: number;
    tipo: tipoNovedad;
}

export interface NotificacionTotalDTO {

    total: number;
    notificacionesProveedor:NotificacionDTO[];
    notificacionesLicitacion:NotificacionDTO[];

}

export const INITIAL_STATE_NOTIFICACION: NotificacionTotalDTO = {
    notificacionesLicitacion: [],
    notificacionesProveedor: [],
    total: 0
}

export type tipoNovedad = "Proveedor" | "Licitacion";
