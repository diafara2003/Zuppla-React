import React, { useEffect, useRef, useState } from 'react'
import { requestAPI } from '../../../../../Provider';
import { APiMethod, RequestModel } from '../../../../../Provider/model/FetchModel';
import { ConstructoraNovDTO } from '../../../Components/SelectorConstructora/Model/Constructora-Model';
import { NovedadDTO } from '../Model/Novedades-Model';

export const useNovedades = () => {
    const [dataNovedades, setDataNovedades] = useState<NovedadDTO[]>([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [valueTab, setValue] = useState(0);
    const [idOpen, setIdOpen] = useState(0);
    const [dataRequest, setDataRequest] = useState<NovedadDTO[]>([]);
    const [isLoading, setIsLoading] = useState(false)


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const consultarNovedades = async (_constructora: ConstructoraNovDTO) => {
        setIsLoading(true)
        const request: RequestModel = {
            metodo: `Novedad/constructora?constructora=${_constructora.constructoraId}`,
            type: APiMethod.GET
        }
        const response = await requestAPI<NovedadDTO[]>(request)!;

        if (response != null) {
            
            setDataRequest(response!);
            setDataNovedades(response!.filter(c => c.isActiva == Boolean(valueTab-1)));
        }
        setIsLoading(false)
    }

    const cambiarEstado = async () => {

        const request: RequestModel = {
            metodo: `Novedad/cambiarestado`,
            type: APiMethod.POST,
            data: {
                codigo: idOpen
            }
        }
        await requestAPI<NovedadDTO[]>(request)!;


        setDataNovedades(() => dataNovedades.map(c => {

            if (c.numero == idOpen) c.isActiva = false;
            return c
        }));

    }


    useEffect(() => {

        setDataNovedades(dataRequest.filter(c => c.isActiva == Boolean(valueTab - 1)));
    }, [valueTab]);



    const handleClose = (isOk: boolean) => {
        setOpenDialog(false);

        if (isOk) {

            cambiarEstado();
        } else {
            setDataNovedades(() => dataNovedades.map(c => {

                if (c.numero == idOpen) c.ischecked = false;


                return c
            }));
        }


    };

    const openModal = () => {
        setOpenDialog(true);
    };



    return { isLoading,consultarNovedades, dataNovedades, handleClose, openDialog, openModal, setIdOpen, setDataNovedades, handleChange, valueTab }
}
