
import { useState, useEffect } from 'react';
import { NotificacionDTO, TipoNotificacion } from '../Model/TipoNotificacion';
import { useUsersNotificacion } from './useUsersNotificacion';



export const useDatosNotificaciones = () => {

  const [tipoNotificacion, setTipoNotificacion] = useState<TipoNotificacion>(TipoNotificacion.Proveddores);
  const [openNew, setOpenNew] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [tabActive, setTabActive] = useState(0);
  const { consultarNotificacion, setTipo, lstNotificacion, isLoading, eliminarContacto, handleAgregarNotificacion } = useUsersNotificacion(tipoNotificacion);
  const [idDelete, setIdDelete] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabActive(newValue);
  };


  const HandleOpenNew = (info: NotificacionDTO) => {
    if (info.usuario > 0) {
      setOpenNew(false);
      handleAgregarNotificacion(info);
    }
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
    setTipo(active);

  }, [tabActive])

  useEffect(() => {

    consultarNotificacion();

  }, [tipoNotificacion])


  useEffect(() => {

  }, []);

  return {
    openNew, HandleOpenNew, setOpenNew,
    openDelete, HandleOpenDelete, setOpenDelete,

    tabActive, handleChange,

    lstNotificacion, isLoading,

    HandleDeleteOk

  }
}
