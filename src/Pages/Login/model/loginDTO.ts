import { UserSessionModel } from "../../../Auth/model/AuthModel";

export interface LoginDTO {
    usuario: string;
    clave: string;
}

export interface RegistrationResponse {
    message: string;
    success: boolean;
    token: string;
    usuario: UserSessionModel;
}

export interface UserRegistrationDto {
    documento: string;
    correo: string;
    Nombres: string;
    Apellidos: string;
    TipoPersona: string;
    IsVinculoConstructora: boolean;
    tipoDocumento: String;
    codigoVerificacion: number | null;

}

export interface CambioClaveDTO {
    PassOld: string;
    PassNew: string;
    PassNewR: string;
}