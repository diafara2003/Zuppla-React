import { useEffect, useState } from "react";
import { RequestInfo } from "./model/FetchModel";

const URLBase: string = "http://localhost/proveedores";

export const useFetch = () => {

    const [state, setState] = useState({
        data: null,
        isLoading: false,
        hasError: "",
    })

    const doFetch = async (request: RequestInfo) => {
        setState({
            ...state,
            isLoading: true,
        });

        let Init: RequestInit = {
            method: request.type,
        };

        if (request.data != null)
            Init.body = JSON.stringify(request.data);

        try {
            const response: Response = await fetch(`${URLBase}/${request.metodo}`, Init);

            if (response.ok) {
                const data = await response.json();
                setState({
                    data,
                    isLoading: false,
                    hasError: "",
                });
            }
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: "Error al traer datos del API",
            });
        }
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        doFetch
    };
}