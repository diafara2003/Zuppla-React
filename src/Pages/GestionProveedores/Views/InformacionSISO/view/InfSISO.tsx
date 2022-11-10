import { Grid, Checkbox, Typography, FormControlLabel, FormGroup } from '@mui/material';
import { useInfSISO } from '../hook/useInfSISO';


const styles = {
    formControlLabel: {
        height: 30,
        "&:hover": {
            background: "#e9eff4"
        }
    }
};

export const InfSISO = () => {
    const { handleChecked, state } = useInfSISO();
    return (
        <Grid container >
            <Grid item xs={12}>
                <Typography variant="subtitle2" fontWeight={600}>Seguimiento de seguridad y Salud ocupacional SISO</Typography>
            </Grid>
            <Grid item xs={12} pl={1.5} mt={1}>
                <FormGroup >
                    <FormControlLabel
                        sx={styles.formControlLabel}
                        componentsProps={{ typography: { variant: 'body1' } }}
                        onClick={() => handleChecked("programaSaludOcupacional", state.programaSaludOcupacional)}
                        control={<Checkbox
                            size="small"
                            tabIndex={-1}
                            checked={state.programaSaludOcupacional}
                            disableRipple
                        />} label={<Typography variant='body1'>Cuenta con programa de salud ocupacional actualizado</Typography>} />
                    <FormControlLabel
                        sx={styles.formControlLabel}
                        onClick={() => handleChecked("programaFactoresRiesgo", state.programaFactoresRiesgo)}
                        control={<Checkbox
                            size="small"
                            tabIndex={-1}
                            checked={state.programaFactoresRiesgo}
                            disableRipple
                        />} label="Cuenta con programa de factores de riesgos actualizado enfocado a los procesos que desarrolla en obra" />
                    <FormControlLabel
                        sx={styles.formControlLabel}
                        onClick={() => handleChecked("tieneComiteSO", state.tieneComiteSO)}
                        control={<Checkbox
                            size="small"
                            tabIndex={-1}
                            checked={state.tieneComiteSO}
                            disableRipple
                        />}
                        label="Tiene conformado comité paritario de S.O ó vigía S.O" />
                    <FormControlLabel
                        sx={styles.formControlLabel}
                        onClick={() => handleChecked("tieneComiteSO", state.tieneComiteSO)}
                        control={<Checkbox
                            tabIndex={-1}
                            checked={state.tieneComiteSO}
                            disableRipple
                            size="small"
                        />}
                        label="Tiene conformado comité paritario de S.O ó vigía S.O" />
                    <FormControlLabel
                        sx={styles.formControlLabel}
                        onClick={() => handleChecked("programaSeguridadEhigiene", state.programaSeguridadEhigiene)}
                        control={<Checkbox
                            tabIndex={-1}
                            checked={state.programaSeguridadEhigiene}
                            disableRipple
                            size="small"
                        />}
                        label="Tiene actualizado el reglamento interno de higiene y seguridad industrial" />
                    <FormControlLabel
                        sx={styles.formControlLabel}
                        componentsProps={{ typography: { variant: 'body1' } }}
                        onClick={() => handleChecked("programaAmbiental", state.programaAmbiental)}
                        control={<Checkbox
                            tabIndex={-1}
                            checked={state.programaAmbiental}
                            disableRipple
                            size="small"
                        />}
                        label={<Typography variant='body1'>Cuenta con plan de manejo ambiental orientado a la actividad que realiza</Typography>} />
                </FormGroup>
            </Grid>

        </Grid >
    )
}
