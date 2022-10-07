import { Grid, TextField } from '@mui/material'
import React from 'react'

export const FrmUsuarioCC = () => {
  return (
    <>
    <Grid container
     spacing={2}
     width={'100%'}
     display={"flex"}
     alignItems={"center"}
     justifyContent={"center"}
     p={1}>

        <Grid item xs={6}>
            <TextField
                required
                id=""
                label="Tipo documento"                        
                fullWidth
                size="small"
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                required
                id=""
                label="Numero de documento"                        
                fullWidth
                size="small"
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                required
                id=""
                label="Cargo"                        
                fullWidth
                size="small"
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                required
                id=""
                label="Usuario"                        
                fullWidth
                size="small"
            />
        </Grid>
    
    </Grid>
</>
  )
}
