import { columnas, InformeAPiSIncoDTOResponse, INITIAL_InformeAPiSIncoDTOResponse, RequestAPiSincoDTO } from "../model/modelInfAPiSinco"
import { useEffect, useState } from 'react';
import { APiMethod, requestAPI } from "../../../Provider";


export const useInformeAPiSinco = (filtros: RequestAPiSincoDTO) => {

    const [state, setState] = useState<InformeAPiSIncoDTOResponse>(INITIAL_InformeAPiSIncoDTOResponse);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(100);


    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const consultarInfo = async () => {
        debugger;
        setLoading(true) 
        const response = await requestAPI<{ detalles: string, encabezado: columnas[] }>({
            metodo: 'Informes',
            type: APiMethod.POST,
            data: filtros
        })!;

        if (response != null) {
            setState({ ...response, detalles: JSON.parse(response.detalles) });
        }
        setLoading(false);
    }


    useEffect(() => { consultarInfo(); }, []);

    return {
        state,
        loading, page, rowsPerPage, handleChangePage, handleChangeRowsPerPage
    }

}