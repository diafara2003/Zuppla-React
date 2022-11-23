import { ChangeEvent, useContext, useState } from 'react';
import { APiMethod, useFetch } from '../../../Provider';
import { AdjuntosDTO } from '../model/documentDTO';
import { useEffect } from 'react';
import { AlertContext } from '../../../Pages/Menu/context/AlertContext';


type typeFile = {

    tipo: string;
    idOrigen: string;
    idOrigen2: string;
    file: AdjuntosDTO;
    uploadedCompleted: (file: AdjuntosDTO) => void;
}

export const useUploadDocument = ({ file, idOrigen, idOrigen2, tipo, uploadedCompleted }: typeFile) => {

    const { data, doFetch, downloadFile, isLoading } = useFetch();
    const [document, setDocument] = useState<AdjuntosDTO>(file);
    const [textoFile, settextofile] = useState(file.nombre);
    const [download, setdonload] = useState(false);
    const { showAlert, stateAlert } = useContext(AlertContext);


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
        showAlert("Archivo guardado exitosamente", "Documentos Adjuntos", "success")

    }


    const descargarArchivo = async () => {
        setdonload(() => true);
        await downloadFile(`Documentos/Descargar?id=${document.id}`);
        setdonload(() => false);
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

        isLoading, document, textoFile, saveFile, descargarArchivo, download
    }
}