import { MenuOutlined, LogoutOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import React from 'react'

export const HeaderPages = ({ drawerWidth = 240 }) => {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                backgroundColor: "#f9f9f9 !important"
                
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography sx={{ color: "gray" }} variant='h6' noWrap component='div'> Informacion general </Typography>
                    <IconButton >
                        <AutoStoriesIcon />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}


