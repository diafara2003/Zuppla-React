import { Grid, TextField } from '@mui/material'
import React from 'react'

export const FrmUser = () => {
  return (
    <>
            <Grid container
             spacing={0}
             width={'100%'}
             display={"flex"}
             alignItems={"center"}
             justifyContent={"center"}
             p={1}>

                <Grid item xs={12}>
                    <TextField
                        required
                        id=""
                        label="Nombre"                        
                        fullWidth
                        size="small"
                    />
                </Grid>
            
            </Grid>
        </>
  )
}
