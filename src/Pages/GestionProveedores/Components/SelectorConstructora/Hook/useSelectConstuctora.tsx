import React, { useEffect, useState } from 'react'
import { RequestModel, APiMethod, requestAPI } from '../../../../../Provider';
import { ConstructoraNovDTO } from '../Model/Constructora-Model';


export const useSelectConstuctora = () => {
  const [dataConst, setdataConst] = useState<ConstructoraNovDTO[]>();
  const [dataConstCopy, setDataConstCopy] = useState<ConstructoraNovDTO[]>(dataConst!);

  const [isLoading, setIsLoading] = useState(true);
  const [stateSelectConst, setStateSelectConst] = useState<ConstructoraNovDTO>({ constructoraId: -1, contNotificaciones: 0, logoConst: "", nombreConst: "" })
  const [filter, setFilter] = useState<string>("")

  const cargaConstructoras = async () => {
  
    const request: RequestModel = {
      AllowAnonymous: false,
      metodo: `Novedad/ConstructoraNovedad`,
      type: APiMethod.GET
    }
    const response = await requestAPI<ConstructoraNovDTO[]>(request)!;
    setdataConst(response!)
    setDataConstCopy(response!);
    setIsLoading(false)
  }

  const handleOnChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilter(value);
  }
  
  useEffect(() => {
    Promise.all([cargaConstructoras()]);    
  }, []);

  return { dataConst: dataConst ?? [], dataConstCopy,filter,  isLoading, stateSelectConst,handleOnChangeFilter, setStateSelectConst }
}
