
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { HeaderComponent } from "../../../../../../SharedComponents/Header"
import { InfSincoApi } from "../../../../../../SharedComponents/InfApiSinco";
import { RequestAPiSincoDTO } from "../../../../../../SharedComponents/InfApiSinco/model/modelInfAPiSinco";
import { FiltroInf } from "../../FiltroInformes/Views/FiltroInf";

export const InfCompras = () => {

    const [showInforme, setShowInforme] = useState(false)
    const [filtros, setFiltros] = useState<RequestAPiSincoDTO>({ informe: 1, constructora: 0, parametro: { estado: -1, fechaf: '-1', fechai: '-1', no: '-1', solicitud: 0 } })

    return (
        <>
            <HeaderComponent title={`Informe de ordenes de compra`} />
            <FiltroInf
                handleFilter={(dataFilter) => {

                    setFiltros(dataFilter)
                    setShowInforme(true)
                }}

            />
            {
                showInforme
                    ?
                    <Box sx={{ background: 'white', height: 'calc(100vh - 200px)' }}>
                        <Grid container width={'100%'}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            spacing={1}
                            p={1}
                        >
                            <Grid item xs={12}>
                                <InfSincoApi
                                    informe={1}
                                    filtros={filtros}
                                />
                            </Grid>

                        </Grid>
                    </Box>
                    : null
            }
        </>
    )
}


export default InfCompras;