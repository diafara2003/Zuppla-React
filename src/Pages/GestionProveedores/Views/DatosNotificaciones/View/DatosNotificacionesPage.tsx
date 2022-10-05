
import { Add } from "@mui/icons-material";
import { Box, Button, List, ListItem, ListItemText, Menu, MenuItem, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import HistoryIcon from '@mui/icons-material/History';
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

    return (
        <>
            <HeaderComponent title={"Información general"} />
            <Box sx={{ width: '100%' }}>
                <Box display={"flex"} justifyContent={"end"} pt={"10px"}>
                    <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                    <Button sx={{ ml: "20px" }} variant="text" > <Add sx={{ mr: "8px" }} />Agregar nuevo contacto</Button>
                </Box>
                <Box sx={{ }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth" centered>
                        <Tab label="Proveedores" {...a11yProps(0)} />
                        <Tab label="Licitaciones" {...a11yProps(1)} />                        
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>                
            </Box>
        </>

    );
}