import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../../Auth';
import { APiMethod, RequestModel } from '../../../../../Provider/model/FetchModel';
import { requestAPI } from '../../../../../Provider/Requestfetch';
import { CiudadesDTO, TerInformacionGeneralDTO, ActividadEconomicaDTO, INITIAL_INFORMACION_GENERAL } from '../Model';


type inputFormulario = {
    hasError: boolean, msn: string
}

type validacionFormulario = {
    email: inputFormulario
    password: inputFormulario
}

export const useInformacionGeneral = () => {
    const { storeUsuario } = useContext(AuthContext);
    // const { hasError, data, isLoading, doFetch } = useFetch();


    const [dataInitialState, setDataInitialState] = useState<TerInformacionGeneralDTO>(INITIAL_INFORMACION_GENERAL);
    const [isLoadingCarga, setIsLoadingCarga] = useState(true);
    const [errorMessage, setError] = useState("");
    const [errorState, errorStateState] = useState<validacionFormulario>(
        {
            email: { hasError: false, msn: '' },
            password: { hasError: false, msn: '' }
        }
    );

    const cargaInfGeneral = async () => {
        const request: RequestModel = {
            metodo: `TercerosGI/InformacionGeneral?id=${storeUsuario.user.idEmpresa}`,
            AllowAnonymous: true,
            type: APiMethod.GET
        }
        const response = await requestAPI<TerInformacionGeneralDTO>(request)!;

        //setDataInitialState(response!= null ?? response);
        if (response != null)
            setDataInitialState(response);

        setIsLoadingCarga(false);
    }

    useEffect(() => {
        cargaInfGeneral();
    }, []);



    const selectedCiudad = <CiudadesDTO>(value: CiudadesDTO) => {
        console.log(value);
    }


    const selectedAcEcono = <ActividadEconomicaDTO>(value: ActividadEconomicaDTO) => {
        console.log(value);
    }


    return {
        dataInitialState: (dataInitialState as TerInformacionGeneralDTO),
        isLoadingCarga,
        errorState,
        selectedCiudad,
        selectedAcEcono,
        errorMessage,

    }
}
