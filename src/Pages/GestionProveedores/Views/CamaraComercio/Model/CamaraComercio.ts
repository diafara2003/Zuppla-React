export interface TerCamaraComercioDTO {
    id: number;
    tipoDocumento: string;
    documento: string;
    nombre: string;
    cargo: string;
}

export interface ValidacionformularioCamaraComercioDTO {
    documento: formValidation;
    nombre: formValidation;
    cargo: formValidation;

}

export const INITIAL_VALITACION__CAMARA_COMERCIO_FORM: ValidacionformularioCamaraComercioDTO = {
    documento: { hasError: false, msn: '' },
    nombre: { hasError: false, msn: '' },
    cargo: { hasError: false, msn: '' },

}

export const INITIAL_INFORMACION_CAMARA_COMERCIO: TerCamaraComercioDTO = {

    cargo: '',
    documento: '',
    id: 0,
    nombre: '',
    tipoDocumento: 'cc'

}


type formValidation = {

    hasError: boolean, msn: string
}