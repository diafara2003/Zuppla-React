import { MenuOutlined } from '@mui/icons-material';
import { Grid, Typography, IconButton, Box, Toolbar } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


type props = {
    title: string;
    marginLeft?: number;
}

export const HeaderComponent = ({ title ="", marginLeft=0}: props) => {


    return (
        <Box
            position='fixed'
            sx={{
                // width: { sm: `calc(100% - ${marginLeft}px)` },
                // ml: { sm: `${marginLeft}px` },
                // backgroundColor: "red !important",
                mt: 0
            }}
        >
            <Toolbar>
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography sx={{ color: "gray" }} variant='h6' noWrap component='div'> {title} </Typography>
                </Grid>
            </Toolbar>
        </Box>
    )
}
