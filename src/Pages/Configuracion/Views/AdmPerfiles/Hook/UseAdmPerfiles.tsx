import React, { useEffect, useState } from 'react'
import { APiMethod, requestAPI, RequestModel } from '../../../../../Provider';
import { PerfilConsultaDTO } from '../Model/AdmPerfil-Model';

export const UseAdmPerfiles = () => {

    const [statePerfil, setStatePerfil] = useState<PerfilConsultaDTO[]>([])
    const [isLoading, setIsLoading] = useState(true);
    async function consultar_perfiles() {
        const request: RequestModel = {
            metodo: `Perfil/administracion`,
            type: APiMethod.GET
        }
        const response = await requestAPI<PerfilConsultaDTO[]>(request)!;
        setStatePerfil(response!);
        setIsLoading(false)

    }





    useEffect(() => {
        consultar_perfiles();


    }, [])

    return (
        { statePerfil,isLoading }
    )
}
