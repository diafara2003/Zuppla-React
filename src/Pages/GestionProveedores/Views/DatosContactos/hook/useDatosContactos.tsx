import React, { useContext, useEffect, useRef, useState } from 'react'
import { TerDatosContactoDTO } from '../Model/DatosContactoDTO'
import { APiMethod, RequestModel, ResponseDTO } from '../../../../../Provider/model/FetchModel';
import { AuthContext } from '../../../../../Auth';
import { requestAPI } from '../../../../../Provider/Requestfetch';
import { ActionContacto, INITIAL_STATE_CONTACTO } from '../Model/DatosContacto-Model';
import { AlertContext } from '../../../../Menu/context/AlertContext';


export const ControllerDatosContactos = () => {
  const { storeUsuario } = useContext(AuthContext);
  const [value, setValue] = useState(0);
  const [valueContacto, setValueContacto] = useState(1);
  const [openDelete, setOpenDelete] = React.useState(false);
  const { showAlert, stateAlert } = useContext(AlertContext);
  const [dataContactos, setDataState] = useState<TerDatosContactoDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);  

  const dataContactoSelect = useRef<TerDatosContactoDTO>()
  const [newDatosContacto, setNewDatosContactos] = useState<TerDatosContactoDTO>()
  const [dataEditContacto, setDataEditContact] = useState<TerDatosContactoDTO>()

  //Historial
  const [dataContactoHistorial, setDataContactoHistorial] = useState<TerDatosContactoDTO>(INITIAL_STATE_CONTACTO)
  const [openHistorial, setOpenHistorial] = useState(false);
  const MostrarHistorial = () => {
    setOpenHistorial(true);
  }
  const OcultarHistorial = () => {
    setOpenHistorial(false);
    debugger
    setDataContactoHistorial(INITIAL_STATE_CONTACTO)
    dataContactoSelect.current = undefined;
  }  
  //historial

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
        handleAddEditContact(contacto!, ActionContacto.New);
        break;
      case ActionContacto.Edit:
        handleAddEditContact(contacto!, ActionContacto.Edit);
        break;
      case ActionContacto.Historial:
        setDataContactoHistorial(dataContactoSelect.current!)
        MostrarHistorial();
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
      metodo: `TercerosGI/deleteDatoContacto?idContacto=${dataContactoSelect.current?.id}`,
      type: APiMethod.DELETE
    };
    const response = await requestAPI<ResponseDTO>(request)!;
    if (response?.success) {
      setDataState(prevState => {
        return [...prevState]?.filter(elemento => elemento.id != dataContactoSelect.current?.id)
      });
      showAlert('Se ha eliminado el contacto exitosamente', "Datos de contacto", 'success');
    } else {
      showAlert('No se pudo eliminar el contacto', "Datos de contacto", 'warning');
    }
    setIsLoading(false)
  }


  const handleAddEditContact = async (_contacto: TerDatosContactoDTO, tipoAction: ActionContacto) => {
  
    setIsLoading(true)
    tipoAction == ActionContacto.New ? _contacto.isNew =true :  _contacto.isNew =false
    const request: RequestModel = {
      metodo: `TercerosGI/GuardaDatosContacto`,
      type: APiMethod.POST,
      data: _contacto
    };
    const response = await requestAPI<ResponseDTO>(request)!;
    debugger
    if (response?.success) {
      if (tipoAction == ActionContacto.New) {
        setDataState([...dataContactos, _contacto!]);
        showAlert('Se ha agregado el nuevo contacto exitosamente', "Datos de contacto", 'success');
      }
      else {
        setDataState([...dataContactos.map(con => {
          let _cont = con;
          if (_cont.id == _contacto.id) {
            _cont = _contacto
          }
          return _cont
        })]);
        showAlert('Se ha actualizado el contacto correctamente', "Datos de contacto", 'success');
      }
      setNewDatosContactos(INITIAL_STATE_CONTACTO);

    } else {
      showAlert('No se pudo actualizar el contacto', "Datos de contacto", 'warning');
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
    dataContactos, isLoading, value, openDelete,dataContactoHistorial, dataEditContacto, valueContacto, stateAlert, openHistorial, OcultarHistorial,
    handleChange, handleCloseDelete, handleDeleteContacto, dataContactoSelect, actionCardContacto, setNewDatosContactos, MostrarHistorial

  }
}
