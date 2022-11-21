import { useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../../../../Auth';
import { APiMethod } from "../../../../../Provider/model/FetchModel";
import { requestAPI } from "../../../../../Provider/Requestfetch";
import { useFetch } from "../../../../../Provider/useFech";
import { MenuDTO } from "../model/modelMenuDTO";

export const useMenu = () => {

  const [isLoading, setisLoading] = useState(true);
  const [pages, setPages] = useState<MenuDTO[]>([]);
  const navigate = useNavigate();
  const { removeSession } = useContext(AuthContext);
  const [menuActived, setMenuActived] = useState("-1");


  const getMenus = async () => {

    const response = await requestAPI<MenuDTO[] | null>({
      metodo: `menu?cod=`,
      type: APiMethod.GET,
      AllowAnonymous: false
    });

    setisLoading(false);

    if (response == null) {
      removeSession();
      navigate('/login', { replace: true })

    } else {
      if (response != null)
        setPages(response.filter(c => c.descripcion.toLowerCase()));

    }

  }


  useEffect(() => {

    getMenus();

  }, [])


  const handleNavigate = (ubicacion: string, mencodigo: string) => {
    setMenuActived(() => mencodigo);
    console.log(`menmodigo ${mencodigo}`);
    if (ubicacion.includes('.html')) {
      localStorage.setItem("APP_PROVEEDOR_MENU_V01",ubicacion);
      navigate('/menuv1', { replace: true });
    }
    else
      navigate(ubicacion, { replace: true });
  };

  return {
    pages,
    isLoading,
    menuActived,
    handleNavigate
  };

}
