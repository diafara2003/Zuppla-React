import { useState } from "react";
import { LoginDTO } from "../model/loginDTO"


// type inputForm={
//     name:string;
//     validate: (): boolean=>{}
// }

type loginForm = {
    email: string;
    password: string
}

export const useForm = (initialForm: loginForm = { email: '', password: '' }) => {

    const [formState, setFormState] = useState(initialForm);

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



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm

    }
}