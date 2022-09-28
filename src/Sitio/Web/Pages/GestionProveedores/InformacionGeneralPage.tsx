import { Box, Card, CardContent, Paper, Typography } from "@mui/material"
import { DatosEmpresa } from "../../Components/GestionProveedores/DatosEmpresa"
import { LogoEmpresa } from "../../Components/GestionProveedores/LogoEmpresa"



export const InformacionGeneralPage = () => {
    return (
        <Box >
            <Paper elevation={3} sx={{ minWidth: 275,}}>
                <Box sx={{p: 5 }}>
                    {/* <LogoEmpresa /> */}
                    <DatosEmpresa />
                </Box>



            </Paper>
        </Box>
    )
}
