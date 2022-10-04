export interface TerInformacionGeneralDTO {
    actividadEconomica: ActividadEconomicaDTO | null;
    certificadoISO: boolean;
    ciudad: CiudadesDTO | null;
    correo: string;
    nombre: string;
    apellido: string;
    numeroIdentificacion: string;
    digitoVerificacion: string;
    paginaWeb: string;
    telefono: string;
    tipoDocumento: string;
    tipoPersona: string;
    direccion: string;
    fechaRegistro: Date
}

export interface ActividadEconomicaDTO {

    id: number;
    codigo: string;
    nombre: string;
}

export interface CiudadesDTO {

    id: number;
    nombre: string;
}