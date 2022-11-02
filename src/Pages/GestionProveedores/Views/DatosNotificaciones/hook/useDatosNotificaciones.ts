
import { useState, useEffect } from 'react';
import { NotificacionDTO, TipoNotificacion } from '../Model/TipoNotificacion';
import { useUsersNotificacion } from './useUsersNotificacion';



export const useDatosNotificaciones = () => {

  const [tipoNotificacion, setTipoNotificacion] = useState<TipoNotificacion>(TipoNotificacion.Proveddores);
  const [openNew, setOpenNew] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [tabActive, setTabActive] = useState(0);
  const { consultarNotificacion, lstNotificacion, isLoading, eliminarContacto, handleAgregarNotificacion } = useUsersNotificacion(tipoNotificacion);
  const [idDelete, setIdDelete] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabActive(newValue);
  };


  const HandleOpenNew = (info: NotificacionDTO) => {
    setOpenNew(true);
    handleAgregarNotificacion(info);
  };

  const HandleOpenDelete = (id: number) => {
    setOpenDelete(true);
    setIdDelete(id);
  };

  const HandleDeleteOk = () => {
    eliminarContacto(idDelete);
    setIdDelete(0);
    setOpenDelete(false);
  }

  useEffect(() => {

    const active = tabActive == 0 ? TipoNotificacion.Proveddores : TipoNotificacion.Licitaciones;

    setTipoNotificacion(active);

  }, [tabActive])

  useEffect(() => {

    consultarNotificacion();

  }, [tipoNotificacion])


  useEffect(() => {

  }, []);

  return {
    openNew, HandleOpenNew,setOpenNew,
    openDelete, HandleOpenDelete,

    tabActive, handleChange,

    lstNotificacion, isLoading,

    HandleDeleteOk

  }
}
