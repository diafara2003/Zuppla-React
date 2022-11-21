//Agregar nuevo enum segun los tipos de auditorias creados en la tabla |TipoAuditoria|
export enum TiposAuditoria {
    InformacionGeneral = '1',   
    RepresentanteLegal = '2',
    ResponsablePedidos= '3',
    Responsablecontratos= '4',
    ResponsableActas= '5',
    Comercial= '6',
    Cartera= '7',
    CamaraComercio = '8',
    InformacionBancaria = '9',
    InformacionTributaria = '10',
    SISO = '11',
    Novedades = '12',
    DocumentosInformacionGeneral = '13',
    DatosNotificacionesProveedor = '14',
    DatosNotificacionesLicitaciones = '15',
    Especialidades = '16',
    AdminUsuarios = '17'
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