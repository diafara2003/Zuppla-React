import { Checkbox, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Typography, FormGroup, FormControlLabel } from '@mui/material';
import { useInfTributaria } from '../hook/useInfTributaria';

export const InfTributariaPages = () => {

  const { state, handleChecked } = useInfTributaria();


  const styles = {
    formControlLabel: {
        height: 30,
        "&:hover": {
            background: "#e9eff4"
        }
    }
};

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="subtitle2" fontWeight={600}>Información tributaria</Typography>
      </Grid>

      <Grid item xs={12} pl={1.5} mt={1}>

        <FormGroup>
          <FormControlLabel
            key={"txt_responsableIVA"}
            sx={styles.formControlLabel}
            componentsProps={{ typography: { variant: 'body1' } }}
            onClick={() => {
              event?.preventDefault();
              handleChecked("responsableIVA", state.responsableIVA)
            }}
            control={<Checkbox
              tabIndex={-1}
              checked={state.responsableIVA}
              disableRipple
            />}
            label={<Typography variant='body1'>¿Es responsable de IVA?</Typography>} />


          <FormControlLabel
            key={"txt_autorretenedor"}
            sx={styles.formControlLabel}
            componentsProps={{ typography: { variant: 'body1' } }}
            onClick={() => {
              event?.preventDefault();
              handleChecked("autorretenedor", state.autorretenedor)
            }}
            control={<Checkbox
              tabIndex={-1}
              checked={state.autorretenedor}
              disableRipple
            />}
            label={<Typography variant='body1'>¿Es autoretenedor?</Typography>} />


          <FormControlLabel
            key={"txt_declarante"}
            sx={styles.formControlLabel}
            componentsProps={{ typography: { variant: 'body1' } }}
            onClick={() => {

              event?.preventDefault();
              handleChecked("declarante", state.declarante)
            }
            }
            control={<Checkbox
              tabIndex={-1}
              checked={state.declarante}
              disableRipple
            />}
            label={<Typography variant='body1'>¿Es declarente?</Typography>} />

          <FormControlLabel
            key={"txt_granContribuyente"}
            sx={styles.formControlLabel}
            componentsProps={{ typography: { variant: 'body1' } }}
            onClick={() => {
              event?.preventDefault();
              handleChecked("granContribuyente", state.granContribuyente)
            }}
            control={<Checkbox
              tabIndex={-1}
              checked={state.granContribuyente}
              disableRipple
            />}
            label={<Typography variant='body1'>¿Es gran contribuyente?</Typography>} />

          <FormControlLabel
            key={"txt_autoRetenedorICA"}
            sx={styles.formControlLabel}
            componentsProps={{ typography: { variant: 'body1' } }}
            onClick={() => {
              event?.preventDefault();
              handleChecked("autoRetenedorICA", state.autoRetenedorICA)

            }}
            control={<Checkbox
              tabIndex={-1}
              checked={state.autoRetenedorICA}

            />}
            label={<Typography variant='body1'>¿Es auto retenedor ICA?</Typography>} />

        </FormGroup>
      </Grid>
    </Grid >
  )
}
