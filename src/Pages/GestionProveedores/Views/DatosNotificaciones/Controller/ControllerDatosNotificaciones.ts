import React, { useEffect, useState } from 'react'
import { APiMethod, RequestModel, ResponseDTO } from '../../../../../Provider/model/FetchModel';
import { requestAPI } from '../../../../../Provider/Requestfetch';
import { useFetch } from '../../../../../Provider/useFech';
import { DatosNotificacionesDTO } from '../Model/model-DatosContacto';
export enum TipoNotificacion {
  Proveddores = 1,
  Licitaciones = 2
}
export const ControllerDatosNotificaciones = () => {

  // const { hasError, data, isLoading, doFetch } = useFetch<DatosNotificacionesDTO[] | null>();
  const [dataInitialProveState, setDataInitialProState] = useState<DatosNotificacionesDTO[]>([]);
  const [dataInitialLicitaState, setDataInitialLiciState] = useState<DatosNotificacionesDTO[]>([]);
  const [isLoadingProCarga, setIsLoadingProCarga] = useState(true);
  const [isLoadingLicCarga, setIsLoadingLicCarga] = useState(true);
  const [dataDeleteProveedor, setDataDeleteProveedor] = React.useState(0)
  const [dataDeleteLici, setDataDeleteLici] = React.useState(0)
  const [openDelete, setOpenDelete] = React.useState(false);

  const cargaDatosProveedor = async () => {
    const request: RequestModel = {
      metodo: `ContactoNotificacion/proveedor`,
      AllowAnonymous: false,
      type: APiMethod.GET
    }
    const response = await requestAPI<DatosNotificacionesDTO[]>(request)!;

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

    setDataInitialLiciState(response!)
    setIsLoadingLicCarga(false)
  }

  const deleteDatoContactoProveedor = async (valorId:number) => {
    const request: RequestModel = {
      metodo: `ContactoNotificacion?id=${valorId}`,
      AllowAnonymous: false,
      type: APiMethod.DELETE
    };
    const response = await requestAPI<ResponseDTO>(request)!;
    return response;
  }

  //Acciones cerrar dialog delete
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleClickDialogDeleteOpen = (valorDelete: number) => {    
    setDataDeleteProveedor(valorDelete);
    setOpenDelete(true);
  };
  const handleLiciDeleteOpen = (valorDelete: number) => {
    setDataDeleteLici(valorDelete);
    setOpenDelete(true);
  };
  
  const handleDeleteClickProve = async () => {
    setIsLoadingProCarga(true)
    handleCloseDelete();
    const response = await deleteDatoContactoProveedor(dataDeleteProveedor);
    if(response?.success == true){     
      setDataInitialProState(prevState =>{               
       return [...prevState]?.filter(elemento => elemento.id != dataDeleteProveedor)
      });
      setDataDeleteProveedor(-1);
    }else{
      console.log("No se pudo eliminar el contacto")   
    } 
    console.log(response)       
    setIsLoadingProCarga(false)
  }

  const handleDeleteClickLici = async ()=>{
    setIsLoadingLicCarga(true)
    handleCloseDelete();
    const response = await deleteDatoContactoProveedor(dataDeleteLici);
    if(response?.success == true){     
      setDataInitialLiciState(prevState =>{               
       return [...prevState]?.filter(elemento => elemento.id != dataDeleteLici)
      });
      setDataDeleteLici(-1);
    }else{
      console.log("No se pudo eliminar el contacto")   
    }     
    setIsLoadingLicCarga(false)
  }

  useEffect(() => {
    cargaDatosProveedor();
    cargaDatosLicitaciones();
  }, []);


  return {
    dataInitialProveState, dataDeleteProveedor, openDelete,
    dataInitialLicitaState, isLoadingProCarga, isLoadingLicCarga, handleCloseDelete,
    setDataDeleteProveedor, setDataInitialProState, setIsLoadingProCarga,
    handleDeleteClickProve, handleDeleteClickLici, handleClickDialogDeleteOpen, handleLiciDeleteOpen
  }
}
