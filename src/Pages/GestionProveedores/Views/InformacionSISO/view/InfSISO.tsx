import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material'
import { useInfSISO } from '../hook/useInfSISO';

export const InfSISO = () => {
    const { handleChecked,state} = useInfSISO();
    return (
        <Paper variant="outlined" sx={{ p: 1 }}>
            <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>

                <ListItem
                    disablePadding
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                            <Checkbox
                                tabIndex={-1}
                                checked={state.programaSaludOcupacional}
                                edge="start"
                                inputProps={{ 'aria-labelledby': "lbl-programaSaludOcupacional" }}
                                disableRipple
                            />
                        </IconButton>
                    }
                >
                    <ListItemButton role={undefined} dense onClick={() => handleChecked("programaSaludOcupacional", state.programaSaludOcupacional)}>
                        <ListItemText primary={`Cuenta con programa de salud ocupacional actualizado`} id={"lbl-programaSaludOcupacional"} />
                    </ListItemButton>
                </ListItem>



                <ListItem
                    disablePadding
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                            <Checkbox
                                tabIndex={-1}
                                checked={state.programaFactoresRiesgo}
                                edge="start"
                                inputProps={{ 'aria-labelledby': "lbl-programaFactoresRiesgo" }}
                                disableRipple
                            />
                        </IconButton>
                    }
                >
                    <ListItemButton role={undefined} dense onClick={() => handleChecked("programaFactoresRiesgo", state.programaFactoresRiesgo)}>
                        <ListItemText primary={`Cuenta con programa de factores de riesgos actualizado enfocado a los procesos que desarrolla en obra`} id={"lbl-programaFactoresRiesgo"} />
                    </ListItemButton>
                </ListItem>

                <ListItem
                    disablePadding
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                            <Checkbox
                                tabIndex={-1}
                                checked={state.tieneComiteSO}
                                edge="start"
                                inputProps={{ 'aria-labelledby': "lbl-tieneComiteSO" }}
                                disableRipple
                            />
                        </IconButton>
                    }
                >
                    <ListItemButton role={undefined} dense onClick={() => handleChecked("tieneComiteSO", state.tieneComiteSO)}>
                        <ListItemText primary={`Tiene conformado comité paritario de S.O ó vigía S.O`} id={"lbl-tieneComiteSO"} />
                    </ListItemButton>
                </ListItem>

                <ListItem
                    disablePadding
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                            <Checkbox
                                tabIndex={-1}
                                checked={state.programaSeguridadEhigiene}
                                edge="start"
                                inputProps={{ 'aria-labelledby': "lbl-programaSeguridadEhigiene" }}
                                disableRipple
                            />
                        </IconButton>
                    }
                >
                    <ListItemButton role={undefined} dense onClick={() => handleChecked("programaSeguridadEhigiene", state.programaSeguridadEhigiene)}>
                        <ListItemText primary={`Tiene actualizado el reglamento interno de higiene y seguridad industrial`} id={"lbl-programaSeguridadEhigiene"} />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    disablePadding
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                            <Checkbox
                                tabIndex={-1}
                                checked={state.programaAmbiental}
                                edge="start"
                                inputProps={{ 'aria-labelledby': "lbl-programaAmbiental" }}
                                disableRipple
                            />
                        </IconButton>
                    }
                >
                    <ListItemButton role={undefined} dense onClick={() => handleChecked("programaAmbiental", state.programaAmbiental)}>
                        <ListItemText primary={`Cuenta con plan de manejo ambiental orientado a la actividad que realiza`} id={"lbl-programaAmbiental"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Paper>
    )
}
