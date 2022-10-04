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
        //console.log(response)
        //setDataInitialState(response!= null ?? response);
        setDataInitialState(response!)
        setIsLoadingCarga(false)       
        //console.log(dataInitialState);
    }

    useEffect(() => {
        cargaInfGeneral();               
    }, [])

    // useEffect(() => {
    //     //cargaInfGeneral();
        
    //     console.log("Entra cambio data")
    //     console.log(dataInitialState)
    
    // }, [dataInitialState])

   

    // const validarUsuario = async () => {

    //     doFetch({
    //         metodo: 'Login',
    //         AllowAnonymous: true,
    //         type: APiMethod.POST,
    //         data: { usuario: formState.email, clave: formState.password }

    //     });

    // }

    // const onInputChange = (e: React.SyntheticEvent) => {
    //     const { name, value } = (e.target as HTMLInputElement);
    //     console.log("EntraoNChange: " + name + " " + value);
    //     setFormState({
    //         ...formState,
    //         [name]: value
    //     });
    // }

    // const onResetForm = () => {
    //     setFormState(initialForm);
    // }

    // const handleSubmit = (e: React.SyntheticEvent) => {
    //     e.preventDefault();

    //     const _validacion = validarCampos();


    //     if (_validacion.email.hasError || _validacion.password.hasError) {
    //         errorStateState(_validacion);
    //         return;
    //     }

    //     validarUsuario();

    // };

    // const validarCampos = (): validacionFormulario => {
    //     const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    //     const hasError = !emailRegexp.test(formState.email);


    //     if (formState.email == "")
    //         return {
    //             email: { hasError: true, msn: 'Clave oligatoria' },
    //             password: { hasError: false, msn: '' }
    //         }

    //     if (hasError)
    //         return {
    //             email: { hasError: true, msn: 'Correo invalido' },
    //             password: { hasError: false, msn: '' }
    //         }
    //     if (formState.password == "")
    //         return {
    //             email: { hasError: false, msn: '' },
    //             password: { hasError: true, msn: 'Contraseña obligatoria' }
    //         }

    //     return {
    //         email: { hasError: false, msn: '' },
    //         password: { hasError: false, msn: '' }
    //     }
    // }





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
