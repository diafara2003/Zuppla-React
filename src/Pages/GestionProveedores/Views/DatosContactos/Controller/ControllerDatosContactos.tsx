import React, { useContext, useEffect, useState } from 'react'
import { DatosContactos } from '../View/DatosContactoPage';
import {TerDatosContactoDTO} from '../Model/DatosContactoDTO'
import { APiMethod, RequestModel } from '../../../../../Provider/model/FetchModel';
import { AuthContext } from '../../../../../Auth';
import { requestAPI } from '../../../../../Provider/Requestfetch';

export const ControllerDatosContactos = () => {
    const [value, setValue] = useState(0);
    const [valueContacto, setValueContacto] = useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(newValue)
        setValue(newValue);
        setValueContacto(newValue + 1)
    };


    const { state } = useContext(AuthContext);
    const [dataContactos, setDataState] = useState<TerDatosContactoDTO[]>();
    const [isLoading, setIsLoading] = useState(true);

    const cargaDatosContacto = async () =>{
        const request: RequestModel = {
            metodo: `TercerosGI/DatosContacto?TipoContacto=${valueContacto}&id=${state.user.idEmpresa}`,
            AllowAnonymous: false,
            type: APiMethod.GET
          }
          const response = await requestAPI<TerDatosContactoDTO[]>(request)!;
          
          console.log(response)
          setDataState(response!)
          setIsLoading(false)
    }
    useEffect(() => {
        cargaDatosContacto();    
      return () => {
      
      }
    }, [])

    useEffect(() => {
        setIsLoading(true)
        cargaDatosContacto();
    
      return () => {      
      }
    }, [value])
       
  return {dataContactos, isLoading, value, handleChange}
}
