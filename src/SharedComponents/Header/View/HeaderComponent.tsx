import { Grid, Typography, IconButton, Box, Toolbar, AppBar, Card } from '@mui/material'

type props = {
    title: string;
    marginLeft?: number;
}

export const HeaderComponent = ({ title = "", marginLeft = 0 }: props) => {

    return (
        <Box
            position='sticky'
            sx={{
                // width: { sm: `calc(100% - ${marginLeft}px)` },
                // ml: { sm: `${marginLeft}px` },
                // backgroundColor: "red !important",

                top: -4,
                zIndex: 9,
                // borderBottom: "1px solid #ebebeb",
                backgroundColor: '#FBFBFB', color: '#1E1E1E',
                // borderLeft: "1px solid #ebebeb",



            }}
        >
            <Toolbar>
                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography sx={{ color: "#283340", fontWeight:'600' }} variant='h6' noWrap component='div'> {title} </Typography>
                </Grid>
            </Toolbar>
        </Box>
    )
}
