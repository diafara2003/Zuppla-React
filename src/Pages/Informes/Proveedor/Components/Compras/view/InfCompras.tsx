import { Box, Grid } from "@mui/material";
import { HeaderComponent } from "../../../../../../SharedComponents/Header"
import { InfSincoApi } from "../../../../../../SharedComponents/InfApiSinco";
import { TipoInformeApiSincoDTO } from "../../../../../../SharedComponents/InfApiSinco/model/modelInfAPiSinco";

export const InfCompras = () => {
    return (
        <>
            <HeaderComponent title={`Informe de ordenes de compra`} />

            <Box sx={{  background: 'white', height: 'calc(100vh - 150px)' }}>
                <Grid container width={'100%'}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    spacing={1}
                    p={1}
                    >
                    <Grid item xs={12}>
                        <InfSincoApi tipo={TipoInformeApiSincoDTO.OrdenCompra} />
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}


export default InfCompras;