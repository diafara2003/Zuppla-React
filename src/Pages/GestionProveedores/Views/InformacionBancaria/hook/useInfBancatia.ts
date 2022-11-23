import { useState, useEffect, useContext } from 'react';
import { RequestModel, APiMethod, requestAPI } from '../../../../../Provider';
import { infBancariaDTO, INITIAL_INF_BANCARIA, INITIAL_VALIDATION_FORMUMLARIO_BANCARIO, ValidacionformularioBancarioDTO, validacionFormularioDTO } from '../model/infBancariaDTO';
import { ResponseDTO } from '../../../../../Provider/model/FetchModel';
import { Validationforms } from '../../../../../Helper/ValidationForms';
import { CiudadesDTO } from '../../InformacionGeneral/Model';
import { TipoCuentaBancariaDTO, BancosDTO } from '../model';
import { AlertContext } from '../../../../Menu/context/AlertContext';
export const useInfBancaria = () => {

    const [state, setState] = useState<infBancariaDTO>(INITIAL_INF_BANCARIA);
    const [validation, setValidation] = useState<ValidacionformularioBancarioDTO>(INITIAL_VALIDATION_FORMUMLARIO_BANCARIO);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [stateBancos, setStateBancos] = useState<BancosDTO[]>([]);
    const [statetipoCuenta, setstatetipoCuenta] = useState<TipoCuentaBancariaDTO[]>([]);
    const { showAlert, stateAlert } = useContext(AlertContext);


    const handleChange = (name: string, value: string | number) => {

        setState({
            ...state,
            [name]: value
        });

    };


    const onInputChange = (e: React.SyntheticEvent) => {
        const { name, value } = (e.target as HTMLInputElement);
        setState({
            ...state,
            [name]: value
        });
        setValidation({ ...validation, [name]: { hasError: false, msn: '' } })
    }

    const selectedCiudad = <Selected>(value: Selected) => {
        const _ciudad = (value as CiudadesDTO);
        setState({
            ...state,
            ciudad: _ciudad.id,
            ciudadTexto: _ciudad.nombre
        });
        setValidation({ ...validation, ciudad: { hasError: false, msn: '' } })
    }


    const consultarInfo = async () => {
        setIsLoading(true);
        const request: RequestModel = {
            metodo: `TercerosGI/informacionbancaria`,
            type: APiMethod.GET,
        }
        const data = await requestAPI<infBancariaDTO>(request);

        setIsLoading(false);        
        if (data != null) setState(data!);

    }

    const consultarBancos = async () => {

        const request: RequestModel = {
            metodo: `TercerosGI/bancos`,
            type: APiMethod.GET,
        }
        const data = await requestAPI<BancosDTO[]>(request);


        if (data != null) setStateBancos(data!);

    }

    const consultarTipoCuenta = async () => {

        const request: RequestModel = {
            metodo: `TercerosGI/tipocuentas`,
            type: APiMethod.GET,
        }
        const data = await requestAPI<TipoCuentaBancariaDTO[]>(request);


        if (data != null) setstatetipoCuenta(data!);

    }

    const guardar = async () => {

        setIsSaving(true);
        const request: RequestModel = {
            metodo: `TercerosGI/informacionbancaria`,
            type: APiMethod.POST,
            data: state
        }
        const data = await requestAPI<ResponseDTO>(request);       
        if (data?.success){            
            setState({ ...state, id: data.codigo });
            showAlert('Se ha guardado la información exitosamente', "Información bancaria", 'success');
        } 

        setIsSaving(false);
    }

    const handleguardar = () => {
        const validacionCampos = validaCamposInfGeneral();

        if (validacionCampos.isvalid)
            guardar();
        else
            setValidation({ ...INITIAL_VALIDATION_FORMUMLARIO_BANCARIO, [validacionCampos.name]: validacionCampos.property })


    }

    const validaCamposInfGeneral = (): validacionFormularioDTO => {

        const data = state;
        const _validationForms = new Validationforms();

        let _validation: validacionFormularioDTO = {
            isvalid: true,
            property: { hasError: false, msn: '' },
            name: ""
        };


        if (data.banco == "") {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El banco  es obligatorio" };
            _validation.name = "banco";
            return _validation;
        }

        if (data.ciudad <= 0) {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "La ciudad  es obligatorio" };
            _validation.name = "ciudad";
            return _validation;
        }

        if (data.tipoCuenta <= 0) {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El tipo de cuenta  es obligatorio" };
            _validation.name = "tipoCuenta";
            return _validation;
        }


        if (data.numero == null || data.numero == "") {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El número de la cuenta es obligatorio" };
            _validation.name = "numero";
            return _validation;
        }

        if (!_validationForms.OnlyInteger(data.numero)) {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El número de la cuenta es incorrecto" };
            _validation.name = "numero";
            return _validation;
        }

        if (data.numero.toString().length < 7) {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El número de la cuenta es incorrecto" };
            _validation.name = "numero";
            return _validation;
        }

        if (data.correoPagos == null || data.correoPagos == "") {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El correo de notificación de pagos es obligatorio" };
            _validation.name = "correoPagos";
            return _validation;
        }

        if (!_validationForms.EmailIsValid(data.correoPagos)) {
            _validation.isvalid = false;
            _validation.property = { hasError: true, msn: "El correo ingresado no es valido" };
            _validation.name = "correoPagos";
            return _validation;
        }

        return _validation;
    }



    useEffect(() => {

        Promise.all([consultarInfo(), consultarBancos(), consultarTipoCuenta()]);
    }, []);

    return {

        state, stateBancos, statetipoCuenta,

        isLoading, isSaving, handleguardar, validation, onInputChange, handleChange, selectedCiudad
    }
}