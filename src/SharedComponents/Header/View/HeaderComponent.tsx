import { Grid, Typography, IconButton } from '@mui/material'
import React from 'react'

export const HeaderComponent = (title: string) => {
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Typography sx={{ color: "gray" }} variant='h6' noWrap component='div'> Informacion general </Typography>
        </Grid>
    )
}
