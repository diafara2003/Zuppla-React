import { Alert, AlertTitle, Box, Collapse, LinearProgress, Snackbar, Stack } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { ModelAlerta } from './Model/alertaModel'
type props = {
  data: ModelAlerta
}

const duracion = 5000
export const AlertPortal = ({ data }: props) => {
  const [open, setOpen] = React.useState(data.estado);
  const [linealBar, setLinealBar] = React.useState(0);
  
  useEffect(() => {
  
    setInterval(function () {
      setLinealBar((currentNumber) => currentNumber + 1)
    }, 90);

    setTimeout(() => {
      setOpen(false)
    }, duracion);  
  }, [])
  
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  
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
