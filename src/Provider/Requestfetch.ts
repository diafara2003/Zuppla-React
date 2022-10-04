import { useContext } from "react";
import { AuthContext, NameStoragetoken } from "../Auth";
import { RequestModel } from "./model/FetchModel";


const URLBase: string = import.meta.env.VITE_BACKEND_URL;

export async function requestAPI<TResponse>(request: RequestModel): Promise<TResponse | null> {

    let Init: RequestInit = {
        method: request.type,
    };



    Init.headers = {
        "Accept": `application/json`,
        "Content-Type": 'application/json'
    }


    if (!request.AllowAnonymous) {

        Init.headers = { ...Init.headers, 'Authorization': `Bearer ${localStorage.getItem(NameStoragetoken)}` };

    }


    if (request.data != null)
        Init.body = JSON.stringify(request.data);

    try {
        const response: Response = await fetch(`${URLBase}/${request.metodo}`, Init);

        return await response.json();
    } catch (error) {
        return null;
    }

}