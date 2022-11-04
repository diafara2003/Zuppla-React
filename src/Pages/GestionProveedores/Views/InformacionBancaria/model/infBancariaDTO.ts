export interface infBancariaDTO {
    id: number;
    banco: number;
    bancoTexto: string;
    tipoCuenta: number;
    tipoCuentaTexto: string;
    numero: string;
    ciudad: number;
    ciudadTexto: string;
    correoPagos: string;
}

export const INITIAL_INF_BANCARIA: infBancariaDTO = {

    banco: 0,
    bancoTexto: "",
    ciudad: 0,
    ciudadTexto: "",
    correoPagos: "",
    id: 0,
    numero: "",
    tipoCuenta: 0,
    tipoCuentaTexto: ""
}


type formValidation = {

    hasError: boolean, msn: string
}

export interface ValidacionformularioBancarioDTO {
    banco: formValidation;
    tipoCuenta: formValidation;
    numero: formValidation;
    correoPago: formValidation;
    ciudad: formValidation;

}

export const INITIAL_VALIDATION_FORMUMLARIO_BANCARIO: ValidacionformularioBancarioDTO = {

    banco: { hasError: false, msn: "" },
    ciudad: { hasError: false, msn: "" },
    correoPago: { hasError: false, msn: "" },
    numero: { hasError: false, msn: "" },
    tipoCuenta: { hasError: false, msn: "" }
}

export interface validacionFormularioDTO {

    isvalid: boolean;
    property: formValidation;
    name: string;
}