
import {  NameStoragetoken } from "../Auth";
import { RequestModel } from "./model/FetchModel";


const URLBase: string = import.meta.env.VITE_BACKEND_URL;


export const downloadFileAPI = async (metodo: string) => {

    

    let Init: RequestInit = {
        method: 'GET',
    };

    Init.headers = { ...Init.headers, 'Authorization': `Bearer ${localStorage.getItem(NameStoragetoken)}` };

    const response = await fetch(`${URLBase}/${metodo}`, Init);


    if (response.ok) {

        
debugger;
        let filename = "";
        var disposition = response.headers.get('Content-Disposition');
        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
        var matches = filenameRegex.exec((disposition ? disposition : ''));
        if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, '');
        }

        const blob = await response.blob();

        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click();
        a.remove();  //aft
    }
}



export async function requestAPI<TResponse>(request: RequestModel): Promise<TResponse | null> {

    let Init: RequestInit = {
        method: request.type,
    };

    if (request.AllowAnonymous == null) request.AllowAnonymous = false;
    if (request.isformData == null) request.isformData = false;

    if (!request.isformData)
        Init.headers = {
            "Accept": `application/json`,
            "Content-Type": 'application/json'
        }


    if (!request.AllowAnonymous)
        Init.headers = { ...Init.headers, 'Authorization': `Bearer ${localStorage.getItem(NameStoragetoken)}` };




    if (request.data != null && !request.isformData)
        Init.body = JSON.stringify(request.data);
    else if (request.data != null && request.isformData)
        Init.body = (request.data as any);

    ///       Init.mode="no-cors";
    try {
        const response: Response = await fetch(`${URLBase}/${request.metodo}`, Init);

        return await response.json();
    } catch (error) {
        return null;
    }

}