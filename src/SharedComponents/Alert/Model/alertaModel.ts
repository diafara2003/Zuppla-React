

export interface  ModelAlerta{
    tipo: colorLineProgress,    
    msgBody: string,
    msgTitle: string,
    estado:boolean,
    //color:colorLineProgress

}



export type colorLineProgress =   "error" | "info" | "success" | "warning" 