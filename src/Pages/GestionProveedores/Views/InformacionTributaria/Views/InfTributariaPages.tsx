import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemText, Paper } from '@mui/material'
import { useInfTributaria } from '../hook/useInfTributaria';

export const InfTributariaPages = () => {

  const { state, handleChecked } = useInfTributaria();

 
  return (
    <Paper variant="outlined" sx={{ width: 360, p: 1 }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>


        <ListItem
          disablePadding
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
              <Checkbox
                tabIndex={-1}
                checked={state.responsableIVA}
                edge="start"
                inputProps={{ 'aria-labelledby': "lblIVA" }}
                disableRipple
              />
            </IconButton>
          }
        >
          <ListItemButton role={undefined} dense onClick={() => handleChecked("responsableIVA", state.responsableIVA)}>
            <ListItemText primary={`Responsable de IVA `} id={"lblIVA"} />
          </ListItemButton>
        </ListItem>


        <ListItem
          disablePadding
          secondaryAction={
            <IconButton edge="end" aria-label="comments" >
              <Checkbox
                tabIndex={-1}
                checked={state.autorretenedor}
                edge="start"
                inputProps={{ 'aria-labelledby': "lblAutoRetenedor" }}
                disableRipple
              />
            </IconButton>
          }
        >
          <ListItemButton role={undefined} dense onClick={() => handleChecked("autorretenedor", state.autorretenedor)}>
            <ListItemText primary={`¿Es autoretenedor? `} id={"lblAutoRetenedor"} />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
              <Checkbox
                tabIndex={-1}
                checked={state.declarante}
                edge="start"
                inputProps={{ 'aria-labelledby': "lblDeclarante" }}
                disableRipple
              />
            </IconButton>
          }
        >
          <ListItemButton role={undefined} dense onClick={() => handleChecked("declarante", state.declarante)}>
            <ListItemText primary={`¿Es declarente? `} id={"lblDeclarante"} />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
              <Checkbox
                tabIndex={-1}
                checked={state.granContribuyente}
                edge="start"
                inputProps={{ 'aria-labelledby': "lblGranContribuyente" }}
                disableRipple
              />
            </IconButton>
          }
        >
          <ListItemButton role={undefined} dense onClick={() => handleChecked("granContribuyente", state.granContribuyente)}>
            <ListItemText primary={`¿Es gran contribuyente? `} id={"lblGranContribuyente"} />
          </ListItemButton>
        </ListItem>


        <ListItem
          disablePadding
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
              <Checkbox
                tabIndex={-1}
                checked={state.autoRetenedorICA}
                edge="start"
                inputProps={{ 'aria-labelledby': "lblautoRetenedorICA" }}
                disableRipple
              />
            </IconButton>
          }
        >
          <ListItemButton role={undefined} dense onClick={() => handleChecked("autoRetenedorICA", state.autoRetenedorICA)}>
            <ListItemText primary={`¿Es auto retenedor ICA? `} id={"lblautoRetenedorICA"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Paper >
  )
}
