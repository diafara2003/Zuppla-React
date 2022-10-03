
export const NameStorageUsuario: string = "UserSession";
export const NameStoragetoken: string = "authorizacion";
export const NameStorageConstructora: string = "constructora_token_session";

export interface UserSessionModel {

    id: number;
    idEmpresa: number;
    logo: string;
    nombreEmpresa: string;
    nombreUsuario: string;
    tipo: string;
    userCorreo: string;
}


export interface ConstructoraDTO {
    id: number;
    NIT: string;
    urlLogo: string;
    nombre: string;
    baseURL: string;
}

export interface AuthContextProps {
    token: string;
    user: UserSessionModel;
    constructora: ConstructoraDTO
}
export const INITIAL_STATE_CONSTRUCTORA = {

    baseURL: '',
    id: 0,
    NIT: "",
    nombre: '',
    urlLogo: ''


}


export const INITIAL_STATE: AuthContextProps = {

    token: localStorage.getItem(NameStoragetoken) ?? '',
    user: (JSON.parse(localStorage.getItem(NameStorageUsuario)!) as UserSessionModel),
    constructora: (JSON.parse(localStorage.getItem(NameStorageConstructora) ?? JSON.stringify(INITIAL_STATE_CONSTRUCTORA)
    ))

}

