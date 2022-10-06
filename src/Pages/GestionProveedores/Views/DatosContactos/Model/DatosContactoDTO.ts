export interface TerDatosContactoDTO {
    id: number;
    terceroId: number;
    tipoContactoId: number;
    nombre: string;
    numeroDocumento: string;
    cargo: string;
    correo: string;
    direccion: string;
    ciudad: CiudadesDTO;
    telefono: string;
    celular: string;
    isNew:boolean
}

export interface CiudadesDTO {
    id: number;
    nombre: string;
}