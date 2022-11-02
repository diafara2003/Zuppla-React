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
    const [isSaving, setIsSaving] = useState(false);


    const handleGuardar = () => {

        guardarInfo();
    }

    const guardarInfo = async () => {
        setIsSaving(true);
        const request: RequestModel = {
            metodo: `TercerosGI/GuardaInfGeneral`,
            AllowAnonymous: true,
            type: APiMethod.POST,
            data: dataInitialState
        }
        const response = await requestAPI<TerInformacionGeneralDTO>(request)!;
        setIsSaving(false);
    }

    const onInputChange = (e: React.SyntheticEvent) => {
        const { name, value } = (e.target as HTMLInputElement);
        setDataInitialState({
            ...dataInitialState,
            [name]: value
        });
    }

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



    const selectedCiudad = <Selected>(value: Selected ) => {
        setDataInitialState({
            ...dataInitialState,
            ciudad : (value as CiudadesDTO)
        });
    }


    const selectedAcEcono = <Selected>(value: Selected) => {
        setDataInitialState({
            ...dataInitialState,
            actividadEconomica: (value as ActividadEconomicaDTO)
        });
    }


    return {
        dataInitialState: (dataInitialState as TerInformacionGeneralDTO),
        isLoadingCarga,
        isSaving,
        selectedCiudad,
        selectedAcEcono,
        handleGuardar,
        onInputChange

    }
}
