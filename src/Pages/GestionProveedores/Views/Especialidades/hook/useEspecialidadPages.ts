import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../../Auth";
import { APiMethod, useFetch } from "../../../../../Provider";


import { useState } from 'react';
import { EspecialidadDTO } from "../components/TableEspecialidad";


export const useEspecialidadPages = () => {


  
    const [openNew, setOpenDialog] = useState(false);



  
    const handleDialog = () => {
        setOpenDialog(() => !openNew);
    }




    return {  handleDialog, openNew }

}

export default useEspecialidadPages;