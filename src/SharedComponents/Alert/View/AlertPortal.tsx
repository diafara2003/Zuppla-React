import { Alert, AlertTitle, Box, LinearProgress, Snackbar } from '@mui/material'
import { useAlertPortal } from '../hook/useAlertPortal'

export const AlertPortal = () => {
  // const { handleClose, linealBar, estado, msgBody, msgTitle, tipo } = useAlertPortal(info.data);
  const { estado, handleClose, linealBar, msgBody, msgTitle, tipo } = useAlertPortal();

  return (
    <Box justifyContent={"center"} display={'flex'} mt={2}>
      <Snackbar
        open={estado}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleClose}>
        <Box>
          <Alert
            severity={tipo}
            onClose={handleClose}
          >
            <AlertTitle>{msgTitle}</AlertTitle>
            {msgBody}
          </Alert>
          <LinearProgress color={tipo} variant='determinate'
            value={linealBar}

          />
        </Box>
      </Snackbar>
    </Box>
  )
}
