import React, { useContext, useEffect, useState } from 'react'
import { DatosContactos } from '../View/DatosContactoPage';
import { TerDatosContactoDTO } from '../Model/DatosContactoDTO'
import { APiMethod, RequestModel, ResponseDTO } from '../../../../../Provider/model/FetchModel';
import { AuthContext } from '../../../../../Auth';
import { requestAPI } from '../../../../../Provider/Requestfetch';
import { ActionContacto, INITIAL_STATE_CONTACTO } from '../Model/DatosContacto-Model';
import { ModelAlerta } from '../../../../../SharedComponents/Alert';

export const ControllerDatosContactos = () => {
  const { storeUsuario } = useContext(AuthContext);
  const [value, setValue] = useState(0);
  const [valueContacto, setValueContacto] = useState(1);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [stateAlertData, setAlertData] = useState<ModelAlerta>({ msgBody: "", msgTitle: "", tipo: "info", estado: false })
  const [dataContactos, setDataState] = useState<TerDatosContactoDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dataDeleteId, setDataDeleteId] = useState<number>(-1);
  const [newDatosContacto, setNewDatosContactos] = useState<TerDatosContactoDTO>()
  const [dataEditContacto, setDataEditContact] = useState<TerDatosContactoDTO>()


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setValueContacto(newValue + 1)
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const cargaDatosContacto = async () => {
    const request: RequestModel = {
      metodo: `TercerosGI/DatosContacto?TipoContacto=${valueContacto}&id=${storeUsuario.user.idEmpresa}`,
      AllowAnonymous: false,
      type: APiMethod.GET
    }
    const response = await requestAPI<TerDatosContactoDTO[]>(request)!;

    setDataState(response!)
    setIsLoading(false)
  }
  const actionCardContacto = (action: ActionContacto, contacto?: TerDatosContactoDTO) => {
    switch (action) {
      case ActionContacto.Delete:
        setOpenDelete(true);
        break;
      case ActionContacto.New:
        handleAddNewContact(contacto!);
        break;

      default:
        break;
    }
  }
  const handleDeleteContacto = async () => {
    setIsLoading(true)
    setOpenDelete(false);
    const request: RequestModel = {
      AllowAnonymous: false,
      metodo: `TercerosGI/deleteDatoContacto?idContacto=${dataDeleteId}`,
      type: APiMethod.DELETE
    };
    const response = await requestAPI<ResponseDTO>(request)!;
    console.log(response)
    if (response?.success) {
      setDataState(prevState => {
        return [...prevState]?.filter(elemento => elemento.id != dataDeleteId)
      });
    
      setAlertData({ ...stateAlertData, msgBody: 'Se ha eliminado el contacto exitosamente', estado: true, tipo: 'success' });
    } else {
     
      setAlertData({ ...stateAlertData, msgBody: 'No se pudo eliminar el contacto', estado: true, tipo: 'warning' });
    }
    console.log(stateAlertData);
    setIsLoading(false)
  }


  const handleAddNewContact = async (_contacto: TerDatosContactoDTO) => {
    debugger
    setIsLoading(true)
    const request: RequestModel = {
      metodo: `TercerosGI/GuardaDatosContacto`,
      type: APiMethod.POST,
      data: _contacto
    };
    const response = await requestAPI<ResponseDTO>(request)!;

    if (response?.success) {
      setDataState([...dataContactos, _contacto!]);
      setNewDatosContactos(INITIAL_STATE_CONTACTO);     
      setAlertData({ ...stateAlertData, msgBody: 'Se ha agregado el nuevo contacto exitosamente', estado: true, tipo: 'success' });
    } else {
     
      setAlertData({ ...stateAlertData, msgBody: 'No se pudo agregar el contacto', estado: true, tipo: 'warning' });
    }
    console.log(stateAlertData);
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
    dataContactos, isLoading, value, openDelete, dataEditContacto, valueContacto, stateAlertData,
    handleChange, handleCloseDelete, handleDeleteContacto, setDataDeleteId, actionCardContacto, setNewDatosContactos

  }
}
