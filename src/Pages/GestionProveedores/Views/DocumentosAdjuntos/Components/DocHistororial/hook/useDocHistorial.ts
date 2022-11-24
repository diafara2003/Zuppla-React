import { useEffect, useState } from 'react';
import { APiMethod, requestAPI } from '../../../../../../../Provider';
import { TipoDocDTO } from '../model/TipoDocDTO';



export const useDocHistorial = () => {

    const [state, setState] = useState<TipoDocDTO[]>([]);

    const [tipoDocSelected, setTipoDocSelected] = useState(0);
    const consultarTipoDoc = async () => {

        const response = await requestAPI<TipoDocDTO[]>({
            metodo: `Adjuntos/tipos`,
            type: APiMethod.GET
        });

        if (response != null) {
            setState(response!);

        }

    }

    const handleSelected = (tipo: number) => {
        setTipoDocSelected(tipo);
    }

    useEffect(() => { consultarTipoDoc() }, []);

    return {

        state, tipoDocSelected,handleSelected
    }
}