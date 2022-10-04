import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { APiMethod } from "../../../../../Provider/model/FetchModel";
import { requestAPI } from "../../../../../Provider/Requestfetch";
import { useFetch } from "../../../../../Provider/useFech";
import { MenuDTO } from "../model/modelMenuDTO";

export const useMenu = () => {

  const [isLoading, setisLoading] = useState(true);
  const [pages, setPages] = useState<MenuDTO[]>([]);
  const navigate = useNavigate();



  const getMenus = async () => {

    const response = await requestAPI<MenuDTO[]>({
      metodo: `menu?cod=`,
      type: APiMethod.GET,
      AllowAnonymous: false
    })!;


    setisLoading(false);


    if (response != null)
      setPages(response!);

  }



  useEffect(() => {

    getMenus();



  }, [])


  const handleNavigate = (ubicacion: string) => {
    navigate(ubicacion, { replace: true })
  };

  return {
    pages: (pages as MenuDTO[]),
    isLoading,
    handleNavigate
  };



}
