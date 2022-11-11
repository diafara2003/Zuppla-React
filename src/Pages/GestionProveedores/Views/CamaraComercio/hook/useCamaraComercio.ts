import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../../Auth';
import { APiMethod, RequestModel, ResponseDTO } from '../../../../../Provider/model/FetchModel';
import { requestAPI } from '../../../../../Provider/Requestfetch';
import { TerCamaraComercioDTO } from '../Model/CamaraComercio';

export const useCamaraComercio = () => {
  const { storeUsuario } = useContext(AuthContext);
  const [dataCamara, setDataCamaraComercio] = useState<TerCamaraComercioDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openDelete, setOpenDelete] = useState(false);
  const [dataIdDelete, setDataIdDelete] = useState(0);
  const [openNew, setOpenNew] = useState(false);


  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const cargaCamaraComercio = async () => {
    const request: RequestModel = {
      metodo: `TercerosGI/CamaraComercio?id=${storeUsuario.user.idEmpresa}`,
      AllowAnonymous: false,
      type: APiMethod.GET
    }
    const response = await requestAPI<TerCamaraComercioDTO[]>(request)!;

    setDataCamaraComercio(response!)
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
    } else {
      console.log("no se pudo eliminar")
    }
    setIsLoading(false)
  }

  useEffect(() => {
    cargaCamaraComercio();
  }, []);



  const newUser = (data: TerCamaraComercioDTO) => {
    setDataCamaraComercio([...dataCamara, data]);
  }

  return { dataCamara, isLoading, openDelete, handleCloseDelete, handleDeleteCamara, setDataIdDelete, setOpenDelete, openNew, setOpenNew, newUser }
}