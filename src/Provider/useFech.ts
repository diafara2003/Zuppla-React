import { useEffect, useState } from "react";
import { RequestModel } from "./model/FetchModel";
import { requestAPI } from "./Requestfetch";


export const useFetch = () => {

    const [data, setData] = useState({});

    const [state, setState] = useState({

        isLoading: false,
        hasError: "",
    })

    const doFetch = async (request: RequestModel) => {
        setState({
            ...state,
            isLoading: true,
        });


        try {
            const response = await requestAPI(request);
           
            if (response != null) {

                setData(response);
                setState({
                    ...state,
                    isLoading: false,
                    hasError: ''
                });
            } else {

                setState({
                    ...state,
                    isLoading: false,
                    hasError: "error al traer datos del API",
                });
            }
        } catch (error) {
            setState({
                ...state,
                isLoading: false,
                hasError: "Error al traer datos del API",
            });
        }
    }

    return {
        data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        doFetch
    };
}