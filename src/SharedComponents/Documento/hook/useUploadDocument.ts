import { ChangeEvent, useState } from 'react';
import { APiMethod, useFetch } from '../../../Provider';
import { AdjuntosDTO } from '../model/documentDTO';
import { useEffect } from 'react';


type typeFile = {

    tipo: string;
    idOrigen: string;
    idOrigen2: string;
    file: AdjuntosDTO;
    uploadedCompleted: (file: AdjuntosDTO) => void;
}

export const useUploadDocument = ({ file, idOrigen, idOrigen2, tipo, uploadedCompleted }: typeFile) => {

    const { data, doFetch,downloadFile, isLoading } = useFetch();
    const [document, setDocument] = useState<AdjuntosDTO>(file);
    const [textoFile, settextofile] = useState(file.nombre);


    const saveFile = (value: ChangeEvent<HTMLInputElement>) => {

        if (value == undefined) return;


        const file = value.target.files![0];

        var data = new FormData();
        data.append("archivo", file);
        data.append("Tipo", tipo);
        data.append("OrigenID", idOrigen);
        data.append("OrigenID2", idOrigen2);


        doFetch({
            metodo: 'Documentos/UploadFiles',
            type: APiMethod.POST,
            AllowAnonymous: false,
            data,
            isformData: true

        });


    }


    const descargarArchivo = async () => {

        await downloadFile(`Documentos/Descargar?id=${document.id}`);
    }

    useEffect(() => {

        if (data != undefined && data != null) {
            const document = (data as AdjuntosDTO[])[0];
            setDocument(document);
            uploadedCompleted(document);
            settextofile(document.nombre);
        }

    }, [data])




    return {

        isLoading, document, textoFile, saveFile,descargarArchivo
    }
}