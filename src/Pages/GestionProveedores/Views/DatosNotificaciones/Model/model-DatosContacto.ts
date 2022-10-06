
export interface DatosNotificacionesDTO {
    usuario: UsuarioNotificacionDTO;
    constructora: DTOKeyValue | null;
    categoria: DTOKeyValue | null;
    zona: string;
    id:number;

}
export interface UsuarioNotificacionDTO {
    id: number;
    nombres: string;
    correo: string;
    documento: string;
    cargo: string;
    celular: string;
}

export type DTOKeyValue = {
    id: number;
    nombre: string;
};
