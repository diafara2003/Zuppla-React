import React, { useContext, useEffect, useState } from 'react'
import { DatosContactos } from '../View/DatosContactoPage';
import { TerDatosContactoDTO } from '../Model/DatosContactoDTO'
import { APiMethod, RequestModel, ResponseDTO } from '../../../../../Provider/model/FetchModel';
import { AuthContext } from '../../../../../Auth';
import { requestAPI } from '../../../../../Provider/Requestfetch';

export const ControllerDatosContactos = () => {
  const { state } = useContext(AuthContext);
  const [value, setValue] = useState(0);
  const [valueContacto, setValueContacto] = useState(1);
  const [openDelete, setOpenDelete] = React.useState(false);

  const [dataContactos, setDataState] = useState<TerDatosContactoDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataDeleteId, setDataDeleteId] = useState<number>(-1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setValueContacto(newValue + 1)
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const cargaDatosContacto = async () => {
    const request: RequestModel = {
      metodo: `TercerosGI/DatosContacto?TipoContacto=${valueContacto}&id=${state.user.idEmpresa}`,
      AllowAnonymous: false,
      type: APiMethod.GET
    }
    const response = await requestAPI<TerDatosContactoDTO[]>(request)!;

    setDataState(response!)
    setIsLoading(false)
  }
  const actionCardContacto = (action: string) => {
    switch (action) {
      case 'D':
        setOpenDelete(true);
        break;
      case 'I':

        break;

      default:
        break;
    }
  }
  const handleDeleteContacto = async() => {
    setIsLoading(true)
    setOpenDelete(false);
    const request: RequestModel = {
      AllowAnonymous: false,
      metodo: `TercerosGI/deleteDatoContacto?idContacto=${dataDeleteId}`,
      type: APiMethod.DELETE
    };
    const response = await requestAPI<ResponseDTO>(request)!;
    console.log(response)
    if (response?.success){
      setDataState(prevState =>{
        // dataContactos?.filter(elemento=> elemento.id!=dataDeleteId)
        return [...prevState]?.filter(elemento=> elemento.id!=dataDeleteId)
      });
      setDataDeleteId(-1);
    }else{
      console.log("no se pudo eliminar")
    }
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

  return {
    dataContactos, isLoading, value, openDelete,
    handleChange, handleCloseDelete, handleDeleteContacto, setDataDeleteId, actionCardContacto
  }
}
