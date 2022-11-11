//Agregar nuevo enum segun los tipos de auditorias creados en la tabla |TipoAuditoria|
export enum TiposAuditoria {
    InformacionGeneral = '1',
    CamaraComercio = '8'

}

export interface TiposHistorial {
    isNew:boolean,
    isDelete:boolean
}
export interface AuditoriaGeneralDTO{
    documento: number;    
    fecha: string;
    opcion: string;
    hora:string;
    nameUsuario: string;
    glosario: Glosario;
    valores: Valores
    countVerMas: number;
    isDelete:boolean;
    isNew:boolean;
}

export interface Glosario{
    nombreSQL: string;
    nombreHTML: string;
}

export interface Valores{
    old: string;
    new: string;
}