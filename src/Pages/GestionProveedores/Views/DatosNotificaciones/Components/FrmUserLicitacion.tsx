import { Grid, TextField } from '@mui/material'
import React from 'react'

export const FrmUserLicitacion = () => {
  return (
    <>
      <Grid container
        spacing={2}
        width={'100%'}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        p={1}>

        <Grid item xs={12}>
          <TextField
            required
            id=""
            label="Usuario"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id=""
            label="Constructora"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id=""
            label="Zona"
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id=""
            label="Categoria"
            fullWidth
            size="small"
          />
        </Grid>

      </Grid>
    </>
  )
}
