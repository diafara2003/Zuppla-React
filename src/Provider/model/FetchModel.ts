export enum APiMethod {
    GET = 'GET',
    POST = "POST",
    DELETE = "DELETE",
    PUT = "PUT",
}

export interface RequestModel {
    type: APiMethod;
    data?: Object;
    metodo: string;
    AllowAnonymous?:boolean;
    isformData?:boolean;
}
export interface ResponseDTO {
    codigo:number,
    mensaje:string,
    success:boolean
   
}