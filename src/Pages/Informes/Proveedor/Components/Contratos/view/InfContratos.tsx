import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { HeaderComponent } from "../../../../../../SharedComponents/Header"
import { InfSincoApi } from "../../../../../../SharedComponents/InfApiSinco";
import { RequestAPiSincoDTO, TipoInformeApiSincoDTO } from "../../../../../../SharedComponents/InfApiSinco/model/modelInfAPiSinco";
import { FiltroInf } from "../../FiltroInformes/Views/FiltroInf";

export const InfContratos = () => {
  const [showInforme, setShowInforme] = useState(false)
  const [filtros, setFiltros] = useState<RequestAPiSincoDTO>()
  return (
    <>
      <HeaderComponent title={`Informe de contratos`} />
      <FiltroInf
        handleFilter={(dataFilter) => {
          debugger
          setFiltros(dataFilter)
          setShowInforme(true)
        }}
        showEstado={false}
      />
      {
        showInforme ?
          <Box sx={{ background: 'white', height: 'calc(100vh - 150px)' }}>
            <Grid container width={'100%'}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={1}
              p={1}
            >
              <Grid item xs={12}>
                <InfSincoApi filtros={filtros!} />
              </Grid>

            </Grid>
          </Box>
          :
          null
      }

    </>
  )
}

export default InfContratos;