import { INITIAL_USUARIO_DTO, INITIAL_VALIDATION_USUARIO, UsuariosDTO, validacionFormulario } from "../../../../Usuarios/Views/usuario/model/usuarioDTO";
import { useState, useEffect, useContext } from 'react';
import { APiMethod, requestAPI, ResponseDTO } from "../../../../../Provider";
import { Validationforms } from "../../../../../Helper/ValidationForms";
import { AuthContext } from "../../../../../Auth";
import { AlertContext } from "../../../../Menu/context/AlertContext";

export const useDatosUsuario = () => {
    const [user, setUser] = useState<UsuariosDTO>(INITIAL_USUARIO_DTO);
    const [validation, setValidation] = useState<validacionFormulario>(INITIAL_VALIDATION_USUARIO);
    const { updateUser, storeUsuario } = useContext(AuthContext);
    const { showAlert, stateAlert } = useContext(AlertContext);

    const consultarUsuario = async () => {

        const response = await requestAPI<{ informacion: UsuariosDTO }>({
            metodo: "Usuario/detallado",
            type: APiMethod.GET,
        })

        if (response != null)
            setUser(() => response!.informacion);
    }

    const onInputChange = (e: React.SyntheticEvent) => {
        const { name, value } = (e.target as HTMLInputElement);
        setUser({
            ...user,
            [name]: value
        });
    }

    const validaciones = (): validacionFormulario => {
        let validaFRM: validacionFormulario = INITIAL_VALIDATION_USUARIO;
        if (!new Validationforms().EmailIsValid(user.correo)) {           
            return { ...validaFRM, email: { hasError: true, msn: 'Correo invalido' } }
        }
        if (user.correo == '') {
            return { ...validaFRM, email: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (!new Validationforms().EmailIsValid(user.correo)) {
            return { ...validaFRM, email: { hasError: true, msn: 'Ingrese un correo valido' } }
        }
        if (user.nombre == '') {
            return { ...validaFRM, nombre: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (user.cargo == '') {
            return { ...validaFRM, cargo: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (user.documento == '') {
            return { ...validaFRM, documento: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (!new Validationforms().OnlyInteger(user.documento)) {
            return { ...validaFRM, documento: { hasError: true, msn: 'Ingrese un documento valido' } }
        }
        if (user.celular == '') {
            return { ...validaFRM, celular: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (!new Validationforms().PhoneValid(user.celular)) {
            return { ...validaFRM, email: { hasError: true, msn: 'Ingrese un celular valido' } }
        }

        return validaFRM;
    }

    const handleSubmit = async () => {

        const _datosValidados = validaciones();

        if (_datosValidados.cargo.hasError || _datosValidados.celular.hasError || _datosValidados.documento.hasError
            || _datosValidados.email.hasError || _datosValidados.nombre.hasError) {
            setValidation(_datosValidados);
            return;
        }

        const response = await requestAPI<{ item1: ResponseDTO, item2: UsuariosDTO }>({
            metodo: "Usuario/actualizardatos",
            type: APiMethod.POST,
            AllowAnonymous: false,
            data: user
        });

        if (response?.item1.success)
            updateUser({
                ...storeUsuario.user,
                nombreUsuario: response.item2.nombre,
                userCorreo: response.item2.correo
            });

        showAlert(response?.item1?.mensaje ?? "", "Actualizar información", "success");
    }


    useEffect(() => { consultarUsuario() }, []);
    return {

        ...user, onInputChange, handleSubmit, validation, stateAlert
    }
}