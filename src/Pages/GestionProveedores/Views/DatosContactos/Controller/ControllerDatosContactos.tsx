import React, { useContext, useEffect, useState } from 'react'
import { DatosContactos } from '../View/DatosContactoPage';
import {TerDatosContactoDTO} from '../Model/DatosContactoDTO'
import { APiMethod, RequestModel } from '../../../../../Provider/model/FetchModel';
import { AuthContext } from '../../../../../Auth';
import { requestAPI } from '../../../../../Provider/Requestfetch';
var TipoContacto= 1;
export const ControllerDatosContactos = () => {
    const { state } = useContext(AuthContext);
    const [dataContactos, setDataState] = useState<TerDatosContactoDTO[]>();
    const [isLoading, setIsLoading] = useState(true);

    const cargaDatosContacto = async () =>{
        const request: RequestModel = {
            metodo: `TercerosGI/DatosContacto?TipoContacto=${TipoContacto}&id=${state.user.idEmpresa}`,
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
       
  return {dataContactos, isLoading}
}
