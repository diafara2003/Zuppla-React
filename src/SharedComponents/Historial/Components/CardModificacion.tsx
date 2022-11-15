import { Card, CardHeader, Typography, CardContent, Grid, Box, Divider, CardActions, Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { AuditoriaGeneralDTO, TiposAuditoria } from '../Model/Historial-Model';
import { CardContentModificacion } from './CardContentModificacion';
import { APiMethod, RequestModel } from '../../../Provider/model/FetchModel';
import { requestAPI } from '../../../Provider';
import { AuthContext } from '../../../Auth';
import { LoadingButton } from '@mui/lab';
type props = {
    auditoria: AuditoriaGeneralDTO
    _tipoAuditoria: TiposAuditoria
}

export const CardModificacion = ({ auditoria, _tipoAuditoria }: props) => {
    const { storeUsuario } = useContext(AuthContext);
    const [stateDetalleAudit, setDetalleAudit] = useState<AuditoriaGeneralDTO[]>([])
    const [stateOpenDetalles, setOpenDetalles] = useState(false)
    const [stateLoading, setStateLoading] = useState(false)

    const detallesAuditoria = async () => {
        setStateLoading(true);
        const request: RequestModel = {
            metodo: `Auditoria/AuditCampoDetalle?nameSQl=${auditoria.glosario.nombreSQL}&nameHMTL=${auditoria.glosario.nombreHTML}&idTipoAuditoria=${_tipoAuditoria}&documento=${storeUsuario.user.idEmpresa}&isDelete=false&isNew=false`,
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
                    <LoadingButton variant="text" onClick={detallesAuditoria}
                        endIcon={<KeyboardArrowDownOutlinedIcon color='primary' />}
                        loading={stateLoading}
                        loadingPosition="end"
                    >
                        Ver más
                    </LoadingButton>
                    :
                    <LoadingButton variant="text"
                        onClick={() => setOpenDetalles(false)}
                        endIcon={<KeyboardArrowUpOutlinedIcon color='primary' />}
                    >
                        Ver menos
                    </LoadingButton>
                )
                :
                <Typography variant='subtitle2' color={'primary'} mt={0.5}>No hay mas registros</Typography>
        )
    }

    return (
        <Card variant="outlined" sx={{ backgroundColor: '#FBFBFB' }}>
            <CardHeader
                title={
                    <Typography fontWeight={600} color={'primary'}>{auditoria.glosario.nombreHTML}</Typography>
                }
                action={
                    renderVerDetalles()
                }
                sx={{ margin: '2px 6px !important', padding: '2px 6px !important' }}>
            </CardHeader >
            <Divider orientation="horizontal" flexItem />
            <CardContent>
                {!stateOpenDetalles ?
                    <CardContentModificacion _detalleAuditoria={auditoria} />
                    :
                    stateDetalleAudit.map((_detalle) => {
                        return (<Box mb={1}><CardContentModificacion _detalleAuditoria={_detalle} /></Box>)
                    })
                }
            </CardContent>

        </Card >
    )
}
