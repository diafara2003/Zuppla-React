import React, { useEffect, useState } from 'react'
import { APiMethod, RequestModel } from '../../../../../Provider/model/FetchModel';
import { requestAPI } from '../../../../../Provider/Requestfetch';
import { useFetch } from '../../../../../Provider/useFech';
import { DatosNotificacionesDTO } from '../Model/model-DatosContacto';
export enum TipoNotificacion {
  Proveddores = 1,
  Licitaciones = 2
}
export const ControllerDatosNotificaciones = () => {

  // const { hasError, data, isLoading, doFetch } = useFetch<DatosNotificacionesDTO[] | null>();
  const [dataInitialProveState, setDataInitialProState] = useState<DatosNotificacionesDTO[]>();
  const [dataInitialLicitaState, setDataInitialLiciState] = useState<DatosNotificacionesDTO[]>();
  const [isLoadingProCarga, setIsLoadingProCarga] = useState(true);
  const [isLoadingLicCarga, setIsLoadingLicCarga] = useState(true);

  const cargaDatosProveedor = async () => {
    const request: RequestModel = {
      metodo: `ContactoNotificacion/proveedor`,
      AllowAnonymous: false,
      type: APiMethod.GET
    }
    const response = await requestAPI<DatosNotificacionesDTO[]>(request)!;
    debugger
    setDataInitialProState(response!)
    setIsLoadingProCarga(false)
  }
  const cargaDatosLicitaciones = async () => {
    const request: RequestModel = {
      metodo: `ContactoNotificacion/licitaciones`,
      AllowAnonymous: false,
      type: APiMethod.GET
    }
    const response = await requestAPI<DatosNotificacionesDTO[]>(request)!;
    debugger
    setDataInitialLiciState(response!)
    setIsLoadingLicCarga(true)
  }

  useEffect(() => {
    cargaDatosProveedor();
    cargaDatosLicitaciones();
  }, []);


  return { dataInitialProveState, dataInitialLicitaState, isLoadingProCarga, isLoadingLicCarga }
}
