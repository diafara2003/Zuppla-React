import { INITIAL_STATE_CONTACTO, INITIAL_STATE_VALIDATION_CONTACTO, validacionFormulario } from '../../../Model/DatosContacto-Model'
import { Validationforms } from '../../../../../../../Helper/ValidationForms'
import { CiudadesDTO, TerDatosContactoDTO } from '../../../Model/DatosContactoDTO'
import { useState } from 'react'

type props = {
    open: boolean,
    tipo: typeModal,
    editDatosContacto?: TerDatosContactoDTO
    close: (dataClose: boolean) => void
    newDatosContacto: (dataContacto: TerDatosContactoDTO) => void
    _title: string

}

export enum typeModal {
    add = 'add',
    edit = 'edit'

}

export const useFrmDatoContacto = ({ close, newDatosContacto, editDatosContacto, open, tipo, _title }: props) => {

    const [dataValidate, setDataValidate] = useState(INITIAL_STATE_VALIDATION_CONTACTO)
    const [dataNewContacto, setdataNewContacto] = useState<TerDatosContactoDTO>(tipo == typeModal.add ? INITIAL_STATE_CONTACTO! : editDatosContacto!)

    const handleClose = () => {
        close(false)
    };

    const selectedCiudad = (value: Object) => {
        setdataNewContacto({
            ...dataNewContacto,
            ciudad: (value as CiudadesDTO)
        });
    }

    const onChangeFrm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setdataNewContacto(prevState => {
            return { ...prevState, [name]: value }
        });
    }

    const submit = () => {        
        const _datosValidados = validaciones();
        setDataValidate(_datosValidados);
        if (_datosValidados.cargo.hasError || _datosValidados.celular.hasError || _datosValidados.documento.hasError
            || _datosValidados.email.hasError || _datosValidados.nombre.hasError || _datosValidados.telefono.hasError
            || _datosValidados.ciudad.hasError || _datosValidados.direccion.hasError) {
            return;
        }
        setDataValidate(INITIAL_STATE_VALIDATION_CONTACTO);
        newDatosContacto(dataNewContacto);
        setdataNewContacto(INITIAL_STATE_CONTACTO)
        handleClose();
    }
    const validaciones = (): validacionFormulario => {

        let validaFRM: validacionFormulario = INITIAL_STATE_VALIDATION_CONTACTO;


        if (dataNewContacto.correo == '') {
            return { ...validaFRM, email: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (!new Validationforms().EmailIsValid(dataNewContacto.correo)) {

            return { ...validaFRM, email: { hasError: true, msn: 'Ingrese un correo valido' } }
        }
        if (dataNewContacto.nombre == '') {
            return { ...validaFRM, nombre: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (dataNewContacto.cargo == '') {
            return { ...validaFRM, cargo: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (dataNewContacto.numeroDocumento == '') {
            return { ...validaFRM, documento: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (!new Validationforms().OnlyInteger(dataNewContacto.numeroDocumento)) {
            return { ...validaFRM, documento: { hasError: true, msn: 'Ingrese un documento valido' } }
        }
        if (dataNewContacto.celular == '') {
            return { ...validaFRM, celular: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (!new Validationforms().OnlyInteger(dataNewContacto.celular)) {
            return { ...validaFRM, celular: { hasError: true, msn: 'Ingrese un celular valido' } }
        }
        if (dataNewContacto.telefono == '') {
            return { ...validaFRM, telefono: { hasError: true, msn: 'Campo obligatorio' } }
        }
        if (!new Validationforms().OnlyInteger(dataNewContacto.telefono)) {
            return { ...validaFRM, telefono: { hasError: true, msn: 'Ingrese un celular valido' } }
        }
        if (dataNewContacto.ciudad.id == 0 || dataNewContacto.ciudad.nombre == "") {
            return { ...validaFRM, ciudad: { hasError: true, msn: 'Campo obligatorio' } }
        }
        return validaFRM;
    }

    return {
        handleClose,

        _title,
        open,
        onChangeFrm,
        dataNewContacto,
        dataValidate,
        selectedCiudad,
        submit
    }
}