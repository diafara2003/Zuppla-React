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




type formValidation = {

    hasError: boolean, msn: string
}

export interface ValidacionformularioDTO {
    actividadEconomica: formValidation;
    certificadoISO: formValidation;
    ciudad: formValidation;
    correo: formValidation;
    nombre: formValidation;
    apellido: formValidation;
    numeroIdentificacion: formValidation;
    digitoVerificacion: formValidation;
    paginaWeb: formValidation;
    telefono: formValidation;
    tipoDocumento: formValidation;
    tipoPersona: formValidation;
    direccion: formValidation
}

export const INITIAL_VALITACION_FORM: ValidacionformularioDTO = {
    actividadEconomica: { hasError: false, msn: '' },
    certificadoISO: { hasError: false, msn: '' },
    ciudad: { hasError: false, msn: '' },
    correo: { hasError: false, msn: '' },
    nombre: { hasError: false, msn: '' },
    apellido: { hasError: false, msn: '' },
    numeroIdentificacion: { hasError: false, msn: '' },
    digitoVerificacion: { hasError: false, msn: '' },
    paginaWeb: { hasError: false, msn: '' },
    telefono: { hasError: false, msn: '' },
    tipoDocumento: { hasError: false, msn: '' },
    tipoPersona: { hasError: false, msn: '' },
    direccion: { hasError: false, msn: '' },
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


export interface validacionFormularioDTO {

    isvalid: boolean;
    property: formValidation;
    name: string;
}