import { Alert, AlertTitle, Box, LinearProgress, Snackbar } from '@mui/material'
import { useAlertPortal } from '../hook/useAlertPortal'
import { ModelAlerta } from '../Model/alertaModel'


type props = {
  data: ModelAlerta
}


export const AlertPortal = ({ data }: props) => {
  const {handleClose,linealBar,open } = useAlertPortal(data);

  return (
    <Box justifyContent={"center"} display={'flex'}>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleClose}>
        <Box>
          <Alert
            severity={data.tipo}
            onClose={handleClose}>
            <AlertTitle>{data.msgTitle}</AlertTitle>
            {data.msgBody}
          </Alert>
          <LinearProgress color={data.tipo} variant='determinate' value={linealBar} />
        </Box>
      </Snackbar>
    </Box>
  )
}
