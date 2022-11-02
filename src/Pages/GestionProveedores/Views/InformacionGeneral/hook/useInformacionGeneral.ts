import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../../../Auth';
import { Validationforms } from '../../../../../Helper/ValidationForms';
import { APiMethod, RequestModel } from '../../../../../Provider/model/FetchModel';
import { requestAPI } from '../../../../../Provider/Requestfetch';
import { CiudadesDTO, TerInformacionGeneralDTO, ActividadEconomicaDTO, INITIAL_INFORMACION_GENERAL, validacionFormularioDTO } from '../Model';
import { ModelAlerta } from "../../../../../SharedComponents/Alert";



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

    const [stateAlert, SetstateAlert] = useState<ModelAlerta>(

        { msgBody: "", msgTitle: "Información", tipo: "warning", estado: false }
    );
    const [dataInitialState, setDataInitialState] = useState<TerInformacionGeneralDTO>(INITIAL_INFORMACION_GENERAL);
    const [isLoadingCarga, setIsLoadingCarga] = useState(true);
    const [isSaving, setIsSaving] = useState(false);


    const handleGuardar = (e: React.SyntheticEvent) => {
        e.preventDefault();

        guardarInfo();
    }

    const guardarInfo = async () => {
        debugger
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
            SetstateAlert({ ...stateAlert, estado: true, msgBody: 'se actualizo la información correctamente' });
        }
        else {
            SetstateAlert({ ...stateAlert, estado: true, msgBody: validacionCampos.mensaje });
        }
    }

    const onInputChange = (e: React.SyntheticEvent) => {
        const { name, value } = (e.target as HTMLInputElement);
        setDataInitialState({
            ...dataInitialState,
            [name]: value
        });
    }


    const validaCamposInfGeneral = (): validacionFormularioDTO => {

        const data = dataInitialState;

        let _validation: validacionFormularioDTO = {
            isvalid: true,
            mensaje: 'Todos los campos son obligatorios.',
            idFocus: ""
        };
        const _validationForms = new Validationforms();

        if (data.nombre == null || data.nombre == "") {
            _validation.isvalid = false;
            _validation.idFocus = "NombreTipoPersona";
            return _validation;
        }
        if (data.numeroIdentificacion == null || data.numeroIdentificacion == "") {
            _validation.isvalid = false;
            _validation.idFocus = "NumIdentTribu";
            return _validation;
        }

        if (!_validationForms.EmailIsValid(data.correo)) {
            _validation.mensaje = "El correo ingresado no es valido.";
            _validation.idFocus = "Correo";
            _validation.isvalid = false;
            return _validation;
        }
        if (data.correo == null || data.correo == "") {
            _validation.isvalid = false;
            _validation.idFocus = "correo";
            return _validation;
        }

        if (data.ciudad == null || data.ciudad.id <= 0) {
            _validation.isvalid = false;
            _validation.idFocus = "Ciudad";
            return _validation;
        }
        if (data.direccion == null || data.direccion == "") {
            _validation.isvalid = false;
            _validation.idFocus = "Direccion";
            return _validation;
        }
        if (data.actividadEconomica == null || data.actividadEconomica.id <= 0) {
            _validation.isvalid = false;
            _validation.idFocus = "ActEcono";
            return _validation;
        }
        if (!_validationForms.OnlyInteger(data.telefono)) {
            _validation.mensaje = "El teléfono ingresado no es valido.";
            _validation.isvalid = false;
            _validation.idFocus = "Telefono";
            return _validation;
        }
        if (data.telefono == null || data.telefono == "") {
            _validation.isvalid = false;
            _validation.idFocus = "Telefono";
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
        stateAlert,
        selectedCiudad,
        selectedAcEcono,
        handleGuardar,
        onInputChange

    }
}
