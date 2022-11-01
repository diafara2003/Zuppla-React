import { ActividadEconomicaDTO, CiudadesDTO } from "./";


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


export const INITIAL_INFORMACION_GENERAL: TerInformacionGeneralDTO = {
    actividadEconomica: null,
    apellido: '',
    certificadoISO: false,
    ciudad: null,
    correo: '',
    digitoVerificacion: '',
    direccion: '',
    fechaRegistro: new Date(),
    nombre: '',
    numeroIdentificacion: '',
    paginaWeb: '',
    telefono: '',
    tipoDocumento: '',
    tipoPersona: ''

}