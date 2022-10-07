import { Autocomplete, Box, Button, Card, CardActions, CardContent, CardHeader, Divider, FormControlLabel, Grid, IconButton, List, ListItem, ListItemText, Menu, MenuItem, Paper, Stack, Switch, Tab, Tabs, TextField, Typography } from "@mui/material";
import React from "react";
import SaveIcon from '@mui/icons-material/Save';
import { HeaderComponent } from "../../../../../SharedComponents/Header";
import { Add } from "@mui/icons-material";
import HistoryIcon from '@mui/icons-material/History';
import { ControllerDatosContactos } from "../Controller/ControllerDatosContactos";
import { Skeleton } from "@mui/lab";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { InputLabel } from '@mui/material';
import { theme } from '../../../../../theme/theme';
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
export const DatosContactos = () => {

    const options = [
        { nombre: 'Representante legal', id: 1 },
        { nombre: 'Responsable de pedidos', id: 2 },
        { nombre: 'Responsable de contratos', id: 3 },
        { nombre: 'Responsable de actas', id: 4 },
        { nombre: 'Asesor comercial', id: 5 },
        { nombre: 'Responsable de cartera', id: 6 }
    ];
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const { dataContactos, isLoading } = ControllerDatosContactos();

    return (
        <>
            <HeaderComponent title={"Datos contactos"} />
            <Box sx={{ width: '100%' }}>
                <Box display={"flex"} justifyContent={"end"} pt={"10px"}>
                    <Button variant="text" > <HistoryIcon sx={{ mr: "8px" }} />Historial</Button>
                    <Button sx={{ ml: "20px" }} variant="text" > <Add sx={{ mr: "8px" }} />Agregar nuevo contacto</Button>
                </Box>
                <Box sx={{}}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        variant="fullWidth" centered
                        sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        {options.map((option, index) => (
                            <Tab key={option.id} label={option.nombre} />
                        ))}
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    {isLoading ? <Skeleton></Skeleton>
                        :
                        <Grid container spacing={2}>
                            {
                                dataContactos?.map((contacto) => {
                                    return (
                                        <Grid item xs={4}>
                                            <Card variant="outlined" sx={{ backgroundColor: '#FBFBFB' }}>
                                                <CardHeader
                                                    action={
                                                        <IconButton aria-label="settings" color="primary">
                                                            <MoreVertIcon  />
                                                        </IconButton>
                                                    }
                                                    title={contacto.nombre}
                                                    titleTypographyProps={{ variant: 'h6' }}
                                                    subheader={contacto.cargo}
                                                ></CardHeader>
                                                <CardContent>
                                                    <Box mb={1} p={0}>
                                                        <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                                            Numero de documento
                                                        </Typography>

                                                        <Typography sx={{ fontSize: 17, mb: 0 }} color="text.primary" >
                                                            {contacto.numeroDocumento}
                                                        </Typography>
                                                    </Box>

                                                    <Box mb={1} p={0}>
                                                        <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                                            Email
                                                        </Typography>
                                                        <Typography sx={{ fontSize: 17, mb: 0 }} color="text.primary" >
                                                            {contacto.numeroDocumento}
                                                        </Typography>
                                                    </Box>

                                                    <Grid container mb={1} p={0}>
                                                        <Grid item xs={5} mb={1} p={0}>
                                                            <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                                                Celular
                                                            </Typography>
                                                            <Typography sx={{ fontSize: 17, mb: 0 }} color="text.primary" >
                                                                {contacto.celular}
                                                            </Typography>
                                                            <Divider orientation="vertical" flexItem />
                                                        </Grid>
                                                        <Divider orientation="vertical" flexItem />
                                                        <Grid item xs={5} mb={1} ml={2} p={0}>
                                                            <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                                                Telefono
                                                            </Typography>
                                                            <Typography sx={{ fontSize: 17, mb: 0 }} color="text.primary" >
                                                                {contacto.telefono}
                                                            </Typography>
                                                        </Grid>

                                                    </Grid>

                                                    <Box mb={1} p={0}>
                                                        <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                                            Dirección
                                                        </Typography>
                                                        <Typography sx={{ fontSize: 17, mb: 0 }} color="text.primary" >
                                                            {contacto.direccion}
                                                        </Typography>
                                                    </Box>
                                                    <Box mb={1} p={0}>
                                                        <Typography m={0} p={0} sx={{ fontSize: 11 }} color="text.secondary" gutterBottom>
                                                            Ciudad
                                                        </Typography>
                                                        <Typography sx={{ fontSize: 17, mb: 0 }} color="text.primary" >
                                                            {contacto.ciudad.nombre}
                                                        </Typography>
                                                    </Box>
                                                </CardContent>
                                            </Card>


                                        </Grid>
                                    );
                                })
                            }

                        </Grid>


                    }
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Box>


            {/* {<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs aria-label="basic tabs example">
                        {options.map((option, index) => (
                            <Tab key={option} label={option}   />
                        ))}
                    </Tabs>
                </Box>
            </Box>} */}
        </>
    );
}

