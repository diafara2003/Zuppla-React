import { useState, useEffect } from 'react';
import { useFetch } from '../../../Provider/useFech';
import { LoginDTO } from "../model/loginDTO"
import { APiMethod, RequestInfo } from '../../../Provider/model/FetchModel';


type loginForm = {
    email: string;
    password: string
}

type inputFormulario = {
    hasError: boolean, msn: string
}

type validacionFormulario = {
    email: inputFormulario
    password: inputFormulario
}

export const useForm = (initialForm: loginForm = { email: '', password: '' }) => {

    const [formState, setFormState] = useState(initialForm);
    const { hasError, data, isLoading, doFetch } = useFetch();
    const [errorState, errorStateState] = useState(
        {
            email: { hasError: false, msn: '' },
            password: { hasError: false, msn: '' }
        }
    );

    const validarUsuario = async () => {

        doFetch({
            metodo: 'Login',
            AllowAnonymous: true,
            type: APiMethod.POST,
            data: { usuario: formState.email, clave: formState.password }

        });

    }



    const onInputChange = (e: React.SyntheticEvent) => {
        const { name, value } = (e.target as HTMLInputElement);
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const _validacion = validarCampos();


        if (_validacion.email.hasError || _validacion.password.hasError) {
            errorStateState(_validacion);
            return;
        }

        validarUsuario();

    };

    const validarCampos = (): validacionFormulario => {
        const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

        const hasError = !emailRegexp.test(formState.email);


        if (formState.email == "")
            return {
                email: { hasError: true, msn: 'Clave oligatoria' },
                password: { hasError: false, msn: '' }
            }

        if (hasError)
            return {
                email: { hasError: true, msn: 'Correo invalido' },
                password: { hasError: false, msn: '' }
            }
        if (formState.password == "")
            return {
                email: { hasError: false, msn: '' },
                password: { hasError: true, msn: 'Contraseña obligatoria' }
            }

        return {
            email: { hasError: false, msn: '' },
            password: { hasError: false, msn: '' }
        }
    }


    useEffect(() => {

        console.log(import.meta.env.VITE_BACKEND_URL);
    }, [])



    return {
        ...formState,
        errorState,
        onInputChange,
        onResetForm,
        handleSubmit,
        isLoading,
        hasError


    }
}