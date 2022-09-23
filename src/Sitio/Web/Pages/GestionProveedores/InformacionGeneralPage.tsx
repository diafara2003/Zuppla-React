import { Box, Card, CardContent, Typography } from "@mui/material"
import { DatosEmpresa } from "../../Components/GestionProveedores/DatosEmpresa"
import { LogoEmpresa } from "../../Components/GestionProveedores/LogoEmpresa"



export const InformacionGeneralPage = () => {
    return (
        <Box>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <LogoEmpresa />
                    <DatosEmpresa />
                </CardContent>
            </Card>
        </Box>
    )
}
