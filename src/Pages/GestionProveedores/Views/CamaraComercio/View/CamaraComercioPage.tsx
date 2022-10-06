import { Box, Button, CircularProgress, IconButton, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import { ControllerCamaraComercio } from "../Controller/ControllerCamaraComercio";
import { TableCamaraComercio } from "../Components/TableCamaraComercio";
import { Add } from "@mui/icons-material";
import HistoryIcon from '@mui/icons-material/History';
export const CamaraComercioPage = () => {

    const { dataCamara, isLoading } = ControllerCamaraComercio();


    return (
        <>
            <HeaderComponent title={"Camara y comercio"} />
            <Box sx={{ width: '100%' }}>
                <Box display={"flex"} justifyContent={"end"} pt={"10px"}>                   
                    <Button sx={{ ml: "20px" }} variant="text" > <Add sx={{ mr: "8px" }} />Agregar usuario</Button>
                    <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                </Box>                
                <Box m={"30px"} mt={"25px"}>
                    {isLoading ?
                         <><Skeleton animation='wave' height={"40px"} /><Skeleton animation='wave' height={"40px"} /> <Skeleton animation='wave' height={"40px"} />
                         <Skeleton  animation='wave' height={"40px"}/> <Skeleton animation='wave' height={"40px"}/><Skeleton animation='wave' height={"40px"}/></>        
                        :
                        dataCamara == null ? <CircularProgress color="inherit" />
                            : <TableCamaraComercio datatable={dataCamara!} />
                    }
                </Box>
            </Box>
        </>
    )

}