export interface NotificacionDTO {
    contNotificaciones: number;
    nombreConst: string;
    logoConst: string;
    constructoraId: number;
    tipo: tipoNovedad;
}

export interface NotificacionTotalDTO {

    total: number;
    totalLicitaciones: number;
    totalProveedores: number
    notificacionesProveedor:NotificacionDTO[];
    notificacionesLicitacion:NotificacionDTO[];

}

export const INITIAL_STATE_NOTIFICACION: NotificacionTotalDTO = {
    notificacionesLicitacion: [],
    notificacionesProveedor: [],
    total: 0,
    totalLicitaciones:0,
    totalProveedores:0
}

export type tipoNovedad = "Proveedor" | "Licitacion";
