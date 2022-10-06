import { Box, Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'

export const SkeletonInfGeneral = () => {
    return (
        <>
            <Grid display={"flex"} justifyContent={"end"} p="10px" >
                <Grid item xs={1} m="">
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </Grid>
            </Grid>
            <Grid sx={{ mt: 7 }} container width={'100%'} display={"flex"} alignItems={"center"} justifyContent={"center"} spacing={2}>
                <Grid item xs={3.5} >
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </Grid>

                <Grid item xs={3.5} >
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </Grid>
                <Grid item xs={3.5} >
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </Grid>
                <Grid item xs={3.5} >
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </Grid>
                <Grid item xs={3.5} >
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </Grid>
                <Grid item xs={3.5} >
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </Grid>
                <Grid item xs={3.5} >
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </Grid>
                <Grid item xs={3.5} >
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </Grid>
                <Grid item xs={3.5} >
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </Grid>
                <Grid item xs={3.5} >
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </Grid>
                <Grid item xs={3.5} >
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </Grid>
                <Grid item xs={3.5} >
                </Grid>

            </Grid>
            <Grid style={{ display: "flex", justifyContent: 'end', marginBottom: '25px', marginRight: '150px' }}>
                <Grid item xs={2} pt="25px" >
                    <Skeleton variant="rectangular" height={40} animation="wave" />
                </Grid>


            </Grid>
        </>
    )
}
