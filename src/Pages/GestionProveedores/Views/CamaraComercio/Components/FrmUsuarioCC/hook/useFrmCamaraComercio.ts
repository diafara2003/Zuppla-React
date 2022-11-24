import { SelectChangeEvent } from "@mui/material";
import { useContext, useState } from "react";
import { Validationforms } from "../../../../../../../Helper/ValidationForms";
import { APiMethod, requestAPI, RequestModel } from "../../../../../../../Provider";
import { AlertContext } from "../../../../../../Menu/context/AlertContext";
import { validacionFormularioDTO } from "../../../../InformacionGeneral/Model";
import { INITIAL_VALITACION__CAMARA_COMERCIO_FORM, INITIAL_INFORMACION_CAMARA_COMERCIO, TerCamaraComercioDTO, ValidacionformularioCamaraComercioDTO } from "../../../Model/CamaraComercio";

type inputFormulario = {
    hasError: boolean, msn: string
}


type props = {
    handleSave: (data: TerCamaraComercioDTO) => void
}

export const useFrmCamaraComercio = ({ handleSave }: props) => {

    const [validation, setValidation] = useState<ValidacionformularioCamaraComercioDTO>(INITIAL_VALITACION__CAMARA_COMERCIO_FORM);
    const [dataInitialState, setDataInitialState] = useState<TerCamaraComercioDTO>(INITIAL_INFORMACION_CAMARA_COMERCIO);
    const [isSaving, setIsSaving] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const { showAlert, stateAlert } = useContext(AlertContext);
    const handleChange = (event: SelectChangeEvent) => {

        setDataInitialState({
            ...dataInitialState,
            tipoDocumento: event.target.value as string
        });

    };

    const onInputChange = (e: React.SyntheticEvent) => {
        const { name, value } = (e.target as HTMLInputElement);
        setDataInitialState({
            ...dataInitialState,
            [name]: value
        });
        setValidation({ ...validation, [name]: { hasError: false, msn: '' } })
    }


    const handleGuardar = async () => {
        const validacionCampos = validaCamposInfGeneral();

        if (validacionCampos.isvalid) {

            setIsSaving(true);
            const request: RequestModel = {
                metodo: `TercerosGI/CamaraComercio`,
                type: APiMethod.POST,
                data: dataInitialState,
                AllowAnonymous: false
            }
            const info = await requestAPI<TerCamaraComercioDTO>(request)!;

            if (info != null) {

                setIsOpen(false);
                setDataInitialState(info!);
                handleSave(info);
                showAlert("Contacto creado exitosamente", "Camara y comercio", "success")
            }

            setIsSaving(false);

        }
        else {
            setValidation({ ...validation, [validacionCampos.name]: validacionCampos.property })
        }
    }

    const validaCamposInfGeneral = (): validacionFormularioDTO => {

        const data = dataInitialState;
        const _validationForms = new Validationforms();

        let _validation: validacionFormularioDTO = {
            isvalid: true,
            property: { hasError: false, msn: '' },
            name: ""
        };


        if (data.nombre == null || data.nombre == "") {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El nombre es obligatorio" };
            _validation.name = "nombre";
            return _validation;
        }

        if (data.cargo == null || data.cargo == "") {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El cargo es obligatorio" };
            _validation.name = "cargo";
            return _validation;
        }

        if (data.documento == null || data.documento == "") {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El documento es obligatorio" };
            _validation.name = "documento";
            return _validation;
        }

        if (!_validationForms.OnlyInteger(data.documento)) {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El documento ingresado no es valido" };
            _validation.name = "documento";
            return _validation;
        }

        return _validation;
    }


    return {
        validation, onInputChange, dataInitialState, handleChange, isSaving, isOpen, setIsOpen, handleGuardar
    }
} 