import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../../Auth';
import { APiMethod, RequestModel, ResponseDTO } from '../../../../../Provider/model/FetchModel';
import { requestAPI } from '../../../../../Provider/Requestfetch';
import { AlertContext } from '../../../../Menu/context/AlertContext';
import { TerCamaraComercioDTO } from '../Model/CamaraComercio';

export const useCamaraComercio = () => {
  const { storeUsuario } = useContext(AuthContext);
  const [dataCamara, setDataCamaraComercio] = useState<TerCamaraComercioDTO[]>([]);
  const [dataCamaraCopy, setDataCamaraCopy] = useState<TerCamaraComercioDTO[]>(dataCamara!);
  const [isLoading, setIsLoading] = useState(true);
  const [openDelete, setOpenDelete] = useState(false);
  const [dataIdDelete, setDataIdDelete] = useState(0);
  const [openNew, setOpenNew] = useState(false);
  const [filter, setFilter] = useState<string>("")
  const { showAlert, stateAlert } = useContext(AlertContext);
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleOnChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilter(value);
  }
  const cargaCamaraComercio = async () => {
    const request: RequestModel = {
      metodo: `TercerosGI/CamaraComercio?id=${storeUsuario.user.idEmpresa}`,
      AllowAnonymous: false,
      type: APiMethod.GET
    }
    const response = await requestAPI<TerCamaraComercioDTO[]>(request)!;

    setDataCamaraComercio(response!)
    setDataCamaraCopy(response!)
    setIsLoading(false)
  }
  const handleDeleteCamara = async () => {
    setIsLoading(true)
    setOpenDelete(false);
    const request: RequestModel = {
      AllowAnonymous: false,
      metodo: `TercerosGI/CamaraComercio/${dataIdDelete}`,
      type: APiMethod.DELETE
    };
    const response = await requestAPI<ResponseDTO>(request)!;
    console.log(response)
    if (response?.success) {
      setDataCamaraComercio(prevState => {
        // dataContactos?.filter(elemento=> elemento.id!=dataDeleteId)
        return [...prevState]?.filter(elemento => elemento.id != dataIdDelete)
      });
      setDataIdDelete(-1);
      showAlert("Contacto eliminado exitosamente", "Camara y comercio", "success")
    } else {
      showAlert("No se pudo eliminar el contacto", "Camara y comercio", "warning")
    }
    setIsLoading(false)
  }

  useEffect(() => {
    cargaCamaraComercio();
  }, []);

  useEffect(() => { 
    debugger   
    setIsLoading(true)
    const value = filter!.toLowerCase();
    if (value == "") setDataCamaraCopy(dataCamara!);
    else setDataCamaraCopy(dataCamara!.filter(c =>
      c.nombre.toLowerCase().includes(value)
    ))
    setIsLoading(false)
  }, [filter, dataCamara]);


  const newUser = (data: TerCamaraComercioDTO) => {
    setDataCamaraComercio([...dataCamara, data]);
    setDataCamaraCopy(dataCamara)
  }

  return { dataCamara, dataCamaraCopy, isLoading, openDelete, handleOnChangeFilter,
             handleCloseDelete, handleDeleteCamara, setDataIdDelete, setOpenDelete, openNew, setOpenNew, newUser }
}
