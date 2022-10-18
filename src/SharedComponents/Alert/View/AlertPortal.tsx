import { Alert, AlertTitle, Box, Collapse, LinearProgress, Stack } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { ModelAlerta } from './Model/alertaModel'
type props = {
  data: ModelAlerta
}

const duracion = 5000
export const  AlertPortal = ({data }: props) => {
  const [open, setOpen] = React.useState(data.estado);
  const [linealBar, setLinealBar] = React.useState(0);
  //const linealBar = useRef(0)
  useEffect(() => {

    setInterval(function () {      
      setLinealBar((currentNumber) => currentNumber + 1 )
    }, 90);

    setTimeout(() => {

       setOpen(false)
    }, duracion);

    return () => {

    }
  }, [])

  return (

    <Box justifyContent={"center"} display={'flex'}>
      <Collapse sx={{ width: '50%' }} in={open}>
        <Alert severity={data.tipo}>
          <AlertTitle>{data.msgTitle}</AlertTitle>
          {data.msgBody}
        </Alert>
        <LinearProgress color={data.tipo} variant='determinate' value={linealBar} />
      </Collapse>
    </Box>


  )
}
