import { Grid, TextField } from '@mui/material'
import React from 'react'

export const FrmNewUser = () => {
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
                        label="Nombre"
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
                        label="Email"
                        fullWidth
                        size="small"
                    />
                </Grid>
              
                <Grid item xs={6}>
                    <TextField
                        required
                        id=""
                        label="Celular"
                        fullWidth
                        size="small"
                    />
                </Grid>
                <Grid item xs={6}>
                </Grid>
            </Grid>
        </>
    )
}
