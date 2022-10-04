import { MenuOutlined, LogoutOutlined } from '@mui/icons-material'
import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import React from 'react'

export const HeaderPages = ({ drawerWidth = 280 }) => {
    return (
        <Box
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                backgroundColor: "white !important",
                mt:0                
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
                    <Typography sx={{ color: "gray" }} variant='h6' noWrap component='div'> Información general </Typography>
                    <IconButton >
                        <AutoStoriesIcon />
                    </IconButton>
                </Grid>
            </Toolbar>
        </Box>
    )
}


