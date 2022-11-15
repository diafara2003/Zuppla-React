import { Card, CardHeader, Typography, CardContent, Grid, Box, Divider, CardActions, Button } from '@mui/material'

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import { AuditoriaGeneralDTO, TiposAuditoria } from '../Model/Historial-Model';
import { CardContentEliminar } from './CardContentEliminar';
import { AuthContext } from '../../../Auth';
import { LoadingButton } from '@mui/lab';
import { APiMethod, requestAPI, RequestModel } from '../../../Provider';
import { useContext, useState } from 'react';
type props = {
    auditoria: AuditoriaGeneralDTO
    _tipoAuditoria: TiposAuditoria
}
export const CardEliminacion = ({ auditoria, _tipoAuditoria }: props) => {
    const { storeUsuario } = useContext(AuthContext);
    const [stateDetalleAudit, setDetalleAudit] = useState<AuditoriaGeneralDTO[]>([])
    const [stateOpenDetalles, setOpenDetalles] = useState(false)
    const [stateLoading, setStateLoading] = useState(false)

    const detallesAuditoria = async () => {
        setStateLoading(true);
        const request: RequestModel = {
            metodo: `Auditoria/AuditCampoDetalle?nameSQl=${auditoria.glosario.nombreSQL}&nameHMTL=${auditoria.glosario.nombreHTML}&idTipoAuditoria=${_tipoAuditoria}&documento=${storeUsuario.user.idEmpresa}&isDelete=true&isNew=false`,
            type: APiMethod.GET
        };
        const response = await requestAPI<AuditoriaGeneralDTO[]>(request)!;
        setDetalleAudit(response!);
        setOpenDetalles(true)
        setStateLoading(false)
    }
    const renderVerDetalles = () => {
        return (
            auditoria.countVerMas > 1
                ?
                (!stateOpenDetalles ?
                    <LoadingButton variant="text" 
                    onClick={detallesAuditoria}
                        endIcon={<KeyboardArrowDownOutlinedIcon color='inherit' />}
                        loading={stateLoading}
                        loadingPosition="end"
                        color='inherit'
                    >
                        Ver más
                    </LoadingButton>
                    :
                    <LoadingButton variant="text"
                        onClick={() => setOpenDetalles(false)}
                        endIcon={<KeyboardArrowUpOutlinedIcon color='inherit' />}
                        color='inherit'
                    >
                        Ver menos
                    </LoadingButton>
                )
                :
                <Typography variant='subtitle2' color={'primary'} mt={0.5}>No hay mas registros</Typography>
        )
    }

    return (
        <Card variant="outlined" sx={{ backgroundColor: 'rgb(255 228 228 / 12%)' }}>
            <CardHeader
                title={
                    <Typography fontWeight={600} color={''}>{auditoria.glosario.nombreHTML}</Typography>
                }
                action={
                    renderVerDetalles()
                }
                sx={{ margin: '2px 6px !important', padding: '2px 6px !important' }}>
            </CardHeader>
            <Divider orientation="horizontal" flexItem />
            <CardContent>
                {!stateOpenDetalles ?
                    <CardContentEliminar _detalleAuditoria={auditoria} />
                    :
                    stateDetalleAudit.map((_detalle) => {
                        return (<Box mb={1}> <CardContentEliminar _detalleAuditoria={_detalle} /></Box>)
                    })
                }
            </CardContent>
        </Card>
    )
}
