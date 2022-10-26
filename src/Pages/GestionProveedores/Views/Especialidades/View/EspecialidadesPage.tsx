import { Box } from "@mui/material";
import { HeaderComponent } from "../../../../../SharedComponents/Header";
// import './App.css'
import { EspecialidadProvider } from "../components/Context";
import { EspecilidadPapa } from "./EspecilidadPapa";

export const EspecialidadesPage = () => {


    return (
        <>
            <HeaderComponent title={"Especialidades"} />
            <Box p={2}>
                <EspecialidadProvider>
                    <EspecilidadPapa />
                </EspecialidadProvider>
            </Box>
        </>
    )
}

export default EspecialidadesPage;