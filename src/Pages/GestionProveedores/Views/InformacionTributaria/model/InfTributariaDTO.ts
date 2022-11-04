export interface InfTributariaDTO {
    id: number;
    idTercero: number;
    responsableIVA: boolean;
    autorretenedor: boolean;
    declarante: boolean;
    granContribuyente: boolean;
    autoRetenedorICA: boolean;

}

export const INITIAL_INF_TRIBUTARIA: InfTributariaDTO = {
    autoRetenedorICA: false,
    autorretenedor: false,
    declarante: false,
    granContribuyente: false,
    id: 0,
    idTercero: 0,
    responsableIVA: false
}