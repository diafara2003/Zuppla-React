export enum APiMethod {
    GET = 'GET',
    POST = "POST",
    DELETE = "DELETE",
    PUT = "PUT",
}

export interface RequestInfo {
    type: APiMethod;
    data?: Object;
    metodo: string;
    AllowAnonymous?:boolean;
}