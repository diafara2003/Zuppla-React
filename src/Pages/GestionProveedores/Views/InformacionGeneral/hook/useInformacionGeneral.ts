import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../../Auth';
import { Validationforms } from '../../../../../Helper/ValidationForms';
import { APiMethod, RequestModel } from '../../../../../Provider/model/FetchModel';
import { requestAPI } from '../../../../../Provider/Requestfetch';
import { CiudadesDTO, TerInformacionGeneralDTO, ActividadEconomicaDTO, INITIAL_INFORMACION_GENERAL, validacionFormularioDTO, ValidacionformularioDTO, INITIAL_VALITACION_FORM } from '../Model';



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
    const [validation, setValidation] = useState<ValidacionformularioDTO>(INITIAL_VALITACION_FORM);


    const handleGuardar = (e: React.SyntheticEvent) => {
        e.preventDefault();

        guardarInfo();
    }

    const guardarInfo = async () => {

        const validacionCampos = validaCamposInfGeneral();

        if (validacionCampos.isvalid) {

            setIsSaving(true);
            const request: RequestModel = {
                metodo: `TercerosGI/GuardaInfGeneral`,
                type: APiMethod.POST,
                data: dataInitialState
            }
            await requestAPI<TerInformacionGeneralDTO>(request)!;
            setIsSaving(false);

        }
        else {
            setValidation({ ...validation, [validacionCampos.name]: validacionCampos.property })
        }
    }

    const onInputChange = (e: React.SyntheticEvent) => {
        const { name, value } = (e.target as HTMLInputElement);
        setDataInitialState({
            ...dataInitialState,
            [name]: value
        });
        setValidation({ ...validation, [name]: { hasError: false, msn: '' } })
    }


    const validaCamposInfGeneral = (): validacionFormularioDTO => {

        const data = dataInitialState;

        let _validation: validacionFormularioDTO = {
            isvalid: true,
            property: { hasError: false, msn: '' },
            name: ""
        };
        const _validationForms = new Validationforms();

        if (data.nombre == null || data.nombre == "") {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El nombre es obligatorio" };
            _validation.name = "nombre";
            return _validation;
        }

        if (data.apellido == null || data.apellido == "") {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El apellido es obligatorio" };
            _validation.name = "apellido";
            return _validation;
        }
        if (data.numeroIdentificacion == null || data.numeroIdentificacion == "") {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El documento es obligatorio" };
            _validation.name = "numeroIdentificacion";
            return _validation;
        }

        if (!_validationForms.EmailIsValid(data.correo)) {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El correo ingresado no es valido" };
            _validation.name = "correo";
            return _validation;
        }
        if (data.correo == null || data.correo == "") {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El correo es obligatorio" };
            _validation.name = "correo";
            return _validation;
        }

        if (data.ciudad == null || data.ciudad.id <= 0) {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "La ciudad es obligatoria" };
            _validation.name = "ciudad";
            return _validation;
        }
        if (data.direccion == null || data.direccion == "") {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "La dirección es obligatoria" };
            _validation.name = "direccion";
            return _validation;
        }
        if (data.actividadEconomica == null || data.actividadEconomica.id <= 0) {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "La actividad económica es obligatoria" };
            _validation.name = "actividadEconomica";
            return _validation;
        }
        if (!_validationForms.OnlyInteger(data.telefono)) {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El telefono ingresado no es valido" };
            _validation.name = "telefono";
            return _validation;
        }
        if (data.telefono == null || data.telefono == "") {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El telefono es obligatoria" };
            _validation.name = "telefono";
            return _validation;
        }

        if (!_validationForms.PhoneValid(data.telefono)) {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El telefono ingresado no es valido" };
            _validation.name = "telefono";
            return _validation;
        }

        return _validation;
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



    const selectedCiudad = <Selected>(value: Selected) => {
        setDataInitialState({
            ...dataInitialState,
            ciudad: (value as CiudadesDTO)
        });
        setValidation({ ...validation, ciudad: { hasError: false, msn: '' } })
    }


    const selectedAcEcono = <Selected>(value: Selected) => {
        setDataInitialState({
            ...dataInitialState,
            actividadEconomica: (value as ActividadEconomicaDTO)
        });
        setValidation({ ...validation, actividadEconomica: { hasError: false, msn: '' } })
    }


    return {
        dataInitialState: (dataInitialState as TerInformacionGeneralDTO),
        isLoadingCarga,
        isSaving,
        validation,
        selectedCiudad,
        selectedAcEcono,
        handleGuardar,
        onInputChange

    }
}
