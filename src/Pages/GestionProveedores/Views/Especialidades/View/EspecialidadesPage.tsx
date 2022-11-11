import { Box } from "@mui/material";
import { HeaderComponent } from "../../../../../SharedComponents/Header";
// import './App.css'
import { EspecialidadProvider } from "../Context";
import { EspecilidadContainer } from "../layout";

export const EspecialidadesPage = () => {
    return (
        <>
            <HeaderComponent title={"Especialidades"} />
            <Box p={2}>
                <EspecialidadProvider>
                    <EspecilidadContainer />
                </EspecialidadProvider>
            </Box>
        </>
    )
}

export default EspecialidadesPage;