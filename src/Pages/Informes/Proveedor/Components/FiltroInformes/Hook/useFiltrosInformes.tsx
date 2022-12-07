import { SelectChangeEvent } from '@mui/material';
import moment from 'moment'
import 'moment/locale/es';
moment.locale('es');
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../../../../Auth';
import { APISincoDTO, RequestAPiSincoDTO, TipoInformeApiSincoDTO } from '../../../../../../SharedComponents/InfApiSinco/model/modelInfAPiSinco';
import { AlertContext } from '../../../../../Menu/context/AlertContext';

export const useFiltrosInformes = ( handleFilter :(data:RequestAPiSincoDTO) => void) => {    
    const [fechaInicial, setFechaInicial] = useState<string | null>(moment().subtract(4, 'months').format("DD/MM/YYYY"));
    const [fechaFinal, setfechaFinal] = useState<string | null>(moment().format("DD/MM/YYYY"));
    const [estado, setEstado] = useState(-1);
    const [noDocumento, setDocumento] = useState('');
    const [openConstructora, setOpenConstructora] = useState(true)
    const { showAlert, stateAlert } = useContext(AlertContext);
    const { constructoraFilter } = useContext(AuthContext);
    const [showInforme, setShowInforme] = useState(false)    
    const handleChange = (event: SelectChangeEvent) => {
        const { value } = (event.target as HTMLInputElement);
        setEstado(Number(value));
    };
    const handleOnChange = (e: React.SyntheticEvent) => {
        const { value } = (e.target as HTMLInputElement);
        setDocumento(value);
    }
    const handleConsultar = () => {
        if (constructoraFilter.id == 0) {
            showAlert('Por favor seleccione una constructora para consultar el informe', 'Informes', 'warning')
            setShowInforme(false)
        }
        else {
            let obj: APISincoDTO = { estado: estado, fechaf: fechaFinal!, fechai: fechaInicial!, no: noDocumento, solicitud: 0 }           
            setShowInforme(true)
            debugger
            handleFilter({ parametro: obj, constructora: constructoraFilter.id, informe: TipoInformeApiSincoDTO.OrdenCompra});
        }
    }

    const handleClikOpenConst = () => {
        setOpenConstructora(true)
    }


  return ({fechaInicial,fechaFinal, estado, noDocumento, openConstructora, 
                  handleChange, handleOnChange, handleConsultar, handleClikOpenConst,
                 setFechaInicial,setfechaFinal, constructoraFilter, setOpenConstructora })
}
