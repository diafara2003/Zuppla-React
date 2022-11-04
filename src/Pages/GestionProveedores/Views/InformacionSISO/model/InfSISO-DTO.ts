export interface InformacionSISO_DTO {
    id: number;
    idTercero: number;
    programaSaludOcupacional: boolean;
    programaFactoresRiesgo: boolean;
    tieneComiteSO: boolean;
    programaSeguridadEhigiene: boolean;
    programaAmbiental: boolean;
}

export const INITIAL_SISO: InformacionSISO_DTO = {
    id: 0,
    idTercero: 0,
    programaAmbiental: false,
    programaFactoresRiesgo: false,
    programaSaludOcupacional: false,
    programaSeguridadEhigiene: false,
    tieneComiteSO: false
}