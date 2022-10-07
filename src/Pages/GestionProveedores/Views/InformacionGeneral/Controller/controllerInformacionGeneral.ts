import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../../Auth';
import { APiMethod, RequestModel } from '../../../../../Provider/model/FetchModel';
import { requestAPI } from '../../../../../Provider/Requestfetch';
import { useFetch } from '../../../../../Provider/useFech';
import { TerInformacionGeneralDTO } from '../Model/InformacionGeneral-model';

type loginForm = {
    tipoPersona: string;
    nombres: string;
    apellidos: string;
    numIdentificacion: string;
    ciudad: string;
    direccion: string;
    correo: string;
    telefono: string;
    pagWeb: string
    actividadEconomica: string;
}

type inputFormulario = {
    hasError: boolean, msn: string
}

type validacionFormulario = {
    email: inputFormulario
    password: inputFormulario
}

export const controllerInformacionGeneral = () => {
    const { state } = useContext(AuthContext);
    // const { hasError, data, isLoading, doFetch } = useFetch();


    // const [formState, setFormState] = useState();
    const [dataInitialState, setDataInitialState] = useState({});
    const [isLoadingCarga, setIsLoadingCarga] = useState(true);
    const [errorMessage, setError] = useState("");
    const [errorState, errorStateState] = useState(
        {
            email: { hasError: false, msn: '' },
            password: { hasError: false, msn: '' }
        }
    );

    const cargaInfGeneral = async () => {
        const request: RequestModel = {
            metodo: `TercerosGI/InformacionGeneral?id=${state.user.idEmpresa}`,
            AllowAnonymous: true,
            type: APiMethod.GET
        }
        const response = await requestAPI<TerInformacionGeneralDTO>(request)!;
      
        //setDataInitialState(response!= null ?? response);
        setDataInitialState(response!)
        setIsLoadingCarga(false)               
    }

    useEffect(() => {
        cargaInfGeneral();               
    }, [])




    return {
        dataInitialState: (dataInitialState as TerInformacionGeneralDTO),
        isLoadingCarga,
        errorState,
        // onInputChange,
        // onResetForm,
        // handleSubmit,       
        errorMessage


    }
}
