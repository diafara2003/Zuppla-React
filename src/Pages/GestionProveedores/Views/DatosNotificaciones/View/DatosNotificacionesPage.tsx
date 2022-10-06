
import { Add } from "@mui/icons-material";
import { Backdrop, Box, Button, CircularProgress, List, ListItem, ListItemText, Menu, MenuItem, Skeleton, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import HistoryIcon from '@mui/icons-material/History';
import { ControllerDatosNotificaciones } from "../Controller/ControllerDatosNotificaciones";
import { TableDatosNotificaciones } from "../Components/TableDatosNotificaciones";
import { TableDatosNotLicitaciones } from "../Components/TableDatosNotLicitaciones";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const DatosNotifiaciones = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const { dataInitialLicitaState,dataInitialProveState,isLoadingLicCarga,isLoadingProCarga  } = ControllerDatosNotificaciones();

    return (
        <>
            <HeaderComponent title={"Información general"} />
            {/* {isLoadingCarga
                 ?
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                : */}
                <Box sx={{ width: '100%'}}>
                    <Box display={"flex"} justifyContent={"end"} pt={"10px"}>
                        <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                        <Button sx={{ ml: "20px" }} variant="text" > <Add sx={{ mr: "8px" }} />Agregar nuevo contacto</Button>
                    </Box>
                    <Box sx={{ pt:"10px" }}>
                        <Tabs value={value} onChange={handleChange} 
                              aria-label="basic tabs example"
                              variant="fullWidth"
                              sx={{ borderBottom: 1, borderColor: 'divider' }}
                                centered>
                            <Tab label="Proveedores" {...a11yProps(0)} />
                            <Tab label="Licitaciones" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Box m={"10px"} mt={"10px"}>
                        {isLoadingProCarga ?
                                    <><Skeleton animation='wave' height={"40px"} /><Skeleton animation='wave' height={"40px"} /> <Skeleton animation='wave' height={"40px"} />
                                    <Skeleton  animation='wave' height={"40px"}/> <Skeleton animation='wave' height={"40px"}/><Skeleton animation='wave' height={"40px"}/></>                        
                                :
                                dataInitialProveState == null ? <CircularProgress color="inherit" /> : <TableDatosNotificaciones datatable={dataInitialProveState!} />
                        }
                            
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    <Box m={"10px"} mt={"25px"}>
                        {isLoadingLicCarga ?
                                <><Skeleton animation='wave' height={"40px"} /><Skeleton animation='wave' height={"40px"} /> <Skeleton animation='wave' height={"40px"} />
                                <Skeleton  animation='wave' height={"40px"}/> <Skeleton animation='wave' height={"40px"}/><Skeleton animation='wave' height={"40px"}/></>                                
                                :
                                dataInitialProveState == null ? <CircularProgress color="inherit" /> : <TableDatosNotLicitaciones datatable={dataInitialLicitaState!} />
                        }                            
                        </Box>
                    </TabPanel>
                </Box>
            

        </>

    );
}