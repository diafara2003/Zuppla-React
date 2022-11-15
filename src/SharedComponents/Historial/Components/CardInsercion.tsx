import { Card, CardHeader, Typography, CardContent, Grid, Box, Divider, CardActions, Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { AuditoriaGeneralDTO, TiposAuditoria } from '../Model/Historial-Model';
import { CardContentInsercion } from './CardContentInsercion';
import { AuthContext } from '../../../Auth';
import { APiMethod, requestAPI, RequestModel } from '../../../Provider';
import { LoadingButton } from '@mui/lab';
type props = {
    auditoria: AuditoriaGeneralDTO,
    _tipoAuditoria: TiposAuditoria
}
export const CardInsercion = ({ auditoria, _tipoAuditoria }: props) => {
    const { storeUsuario } = useContext(AuthContext);
    const [stateDetalleAudit, setDetalleAudit] = useState<AuditoriaGeneralDTO[]>([])
    const [stateOpenDetalles, setOpenDetalles] = useState(false)
    const [stateLoading, setStateLoading] = useState(false)

    const detallesAuditoria = async () => {
        setStateLoading(true);
        const request: RequestModel = {
            metodo: `Auditoria/AuditCampoDetalle?nameSQl=${auditoria.glosario.nombreSQL}&nameHMTL=${auditoria.glosario.nombreHTML}&idTipoAuditoria=${_tipoAuditoria}&documento=${storeUsuario.user.idEmpresa}&isDelete=false&isNew=true`,
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
                        endIcon={<KeyboardArrowDownOutlinedIcon color='success' />}
                        loading={stateLoading}
                        loadingPosition="end"
                        color='success'
                    >
                        Ver más
                    </LoadingButton>
                    :
                    <LoadingButton variant="text"
                        onClick={() => setOpenDetalles(false)}
                        endIcon={<KeyboardArrowUpOutlinedIcon color='success' />}
                        color='success'
                    >
                        Ver menos
                    </LoadingButton>
                )
                :
                <Typography variant='subtitle2' color={'primary'} mt={0.5}>No hay mas registros</Typography>
        )
    }

    return (
        <Card variant="outlined" sx={{ backgroundColor: '#d8ffd826 !important' }}>
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
                    <CardContentInsercion detalleAudit={auditoria} />
                    :
                    stateDetalleAudit.map((_detalle) => {
                        return (<Box mb={1}>  <CardContentInsercion detalleAudit={_detalle} /></Box>)
                    })
                }
            </CardContent>
        </Card>
    )
}
