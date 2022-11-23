import { useState } from "react";
import { Validationforms } from "../../../../../../../Helper/ValidationForms";
import { UsuariosDTO, INITIAL_USUARIO_DTO, INITIAL_VALIDATION_USUARIO, validacionFormulario } from "../../../model/usuarioDTO";
import { typeModal } from "../view/FrmNewUser";

type tipoModal =
    { type: 'add' } | { type: 'edit' }


type props = {
    open: boolean,
    tipo: typeModal,
    editUser: UsuariosDTO
    close: (dataClose: boolean) => void
    newUser: (dataUser: UsuariosDTO) => void
}

export const useFrmNewUser = ({ newUser, open, close, tipo, editUser }: props) => {

    const [dataNewUser, setDataNewUser] = useState<UsuariosDTO>(tipo == typeModal.add ? INITIAL_USUARIO_DTO : editUser)
    const [dataValidate, setDataValidate] = useState(INITIAL_VALIDATION_USUARIO)


    const handleClose = () => {
        close(false)
    };
    const onChangeFrm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDataNewUser(prevState => {
            return { ...prevState, [name]: value }
        });
    }
    const submit = () => {
        const _datosValidados = validaciones();
        setDataValidate(_datosValidados);
        if (_datosValidados.cargo.hasError || _datosValidados.celular.hasError || _datosValidados.documento.hasError
            || _datosValidados.email.hasError || _datosValidados.nombre.hasError) {
            return;
        }
        setDataValidate(INITIAL_VALIDATION_USUARIO);
        newUser(dataNewUser);
        setDataNewUser(INITIAL_USUARIO_DTO)
        handleClose();
    }
    const validaciones = (): validacionFormulario => {
        let validaFRM: validacionFormulario = INITIAL_VALIDATION_USUARIO;
        if (!new Validationforms().EmailIsValid(dataNewUser.correo)) {

            return { ...validaFRM, email: { hasError: true, msn: 'Ingrese un correo valido' } }
        }
        if (dataNewUser.correo == '') {
            return { ...validaFRM, email: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (dataNewUser.nombre == '') {
            return { ...validaFRM, nombre: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (dataNewUser.cargo == '') {
            return { ...validaFRM, cargo: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (dataNewUser.documento == '') {
            return { ...validaFRM, documento: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (!new Validationforms().OnlyInteger(dataNewUser.documento)) {
            return { ...validaFRM, documento: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (dataNewUser.celular == '') {
            return { ...validaFRM, celular: { hasError: true, msn: 'Campo obligatorio' } }
        }

        if (!new Validationforms().PhoneValid(dataNewUser.celular)) {
            return { ...validaFRM, celular: { hasError: true, msn: 'Ingrese un celular valido' } }
        }
        return validaFRM;
    }

    return {


        handleClose, onChangeFrm, dataNewUser, dataValidate, submit
    }
}