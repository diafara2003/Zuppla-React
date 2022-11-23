import { Box, Typography, Tooltip, Grid, Button, IconButton, CircularProgress } from '@mui/material'
import { AdjuntoTerceroDTO, AdjuntosDTO, TipoAdjuntoTerceroDTO } from '../model/documentDTO';
import DoneIcon from '@mui/icons-material/Done';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import InfoIcon from '@mui/icons-material/Info';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useUploadDocument } from '../hook/useUploadDocument';
import { LoadingButton } from '@mui/lab';


type props = {
    readonly?: boolean;
    tipo: string;
    idOrigen: string;
    idOrigen2?: string;
    file: AdjuntoTerceroDTO;
    uploadedCompleted: (file: AdjuntosDTO) => void;
}

export const UploadDocument = (info: props) => {

    const { isLoading, document, saveFile, textoFile, descargarArchivo, download } = useUploadDocument({
        file: info.file.adjunto,
        idOrigen: info.idOrigen,
        idOrigen2: info.idOrigen2 ?? "",
        tipo: info.tipo,
        uploadedCompleted: info.uploadedCompleted
    });
    let readonly = false;


    if (info.readonly != undefined) readonly = info.readonly;

    let _title = info.file.tipoAdjunto.nombre.split('(')[0]
    let _info = info.file.tipoAdjunto.nombre.split('(')[1]?.replace(')', '')


    return (
        <Box key={info.file.tipoAdjunto.id.toString()} sx={{ flexGrow: 1, overflow: '', px: 3 }} >
            <Box display={'flex'}>
                <Tooltip title={_title} arrow>
                    <Typography noWrap variant='subtitle1' fontWeight={600} fontSize={14}> {_title}</Typography>
                </Tooltip>
                
                {
                    _info != undefined ? <Tooltip children={<InfoIcon sx={{ ml: 1 }} color='primary' />} title={_info}></Tooltip> : ''
                }
            </Box>
            <Grid mt={1} container columnSpacing={{ xs: 1 }}>
                <Grid item xs={readonly ? 11 : 8} mt={1}>
                    {
                        textoFile == ''
                            ? <Typography color={'gray'} variant='subtitle2'> Seleccione un archivo... </Typography>
                            : <Box display={'flex'}> <Typography noWrap variant='subtitle2'> {textoFile}</Typography>
                                <DoneIcon sx={{ ml: 1 }} color='success' />
                            </Box>
                    }
                </Grid>
                {readonly
                    ? null
                    : <Grid item xs={3}>
                        <LoadingButton variant="outlined" component="label"
                            loading={isLoading}
                            loadingPosition="start"
                            startIcon={<FileUploadOutlinedIcon color='primary' />}
                        >
                            Cargar
                            <input hidden type="file" onChange={(e) => { saveFile(e) }} />
                        </LoadingButton>
                    </Grid>}
                {document.id > 0
                    ? <Grid item xs={1}>
                        <IconButton color="primary" aria-label="upload picture" component="label" onClick={descargarArchivo}>
                            {download ? <CircularProgress color="success" size={20} /> : <FileDownloadOutlinedIcon color='success' />}
                        </IconButton>
                    </Grid>
                    : null
                }


            </Grid>
        </Box>
    )
}
