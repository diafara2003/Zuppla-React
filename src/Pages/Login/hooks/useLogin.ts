import { useState, useEffect, useContext } from 'react';
import { useFetch } from '../../../Provider/useFech';
import { APiMethod } from '../../../Provider/model/FetchModel';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Auth';
import { RegistrationResponse } from '../model/loginDTO';



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

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formState, setFormState] = useState(initialForm);
    const [errorMessage, setError] = useState("");

    const { hasError, data, isLoading, doFetch } = useFetch();
    const [errorState, errorStateState] = useState(
        {
            email: { hasError: false, msn: '' },
            password: { hasError: false, msn: '' }
        }
    );

    useEffect(() => {

        const response = <RegistrationResponse>data!;
        if (hasError == '' && data != null && data.hasOwnProperty("token")) {
            
            if (response.token == '' || response.token == null) {

                setError(response.message);
                return;
            }

            login(response.token ?? '', response.usuario);
            navigate('/home', { replace: true })
        }

    }, [data])


    useEffect(() => {

        if (hasError == "not found") {
            setError(() => "EL usuario no existe o la contraseña esta incorrecta");
            return;
        }

    }, [hasError])


    const signIn = async () => {

        doFetch({
            metodo: 'Login',
            AllowAnonymous: true,
            type: APiMethod.POST,
            data: { usuario: formState.email, clave: formState.password }

        });

    }

    const onInputChange = (e: React.SyntheticEvent) => {
        const { name, value } = (e.target as HTMLInputElement);
        console.log("EntraoNChange: " + name + " " + value);
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

        signIn();

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





    return {
        ...formState,
        errorState,
        onInputChange,
        onResetForm,
        handleSubmit,
        isLoading,
        errorMessage


    }
}
