import { Box, Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'

type props = {
    NoColumnas: number,
    NoFilas: number,
    Tipo: string // 'FRM' , 'CARD', 'TABLE'
}

export const SkeletonDinamic = ({ NoColumnas, NoFilas, Tipo }: props) => {
    const switchSkeleton = () => {
        switch (Tipo) {
            case 'FRM':
                return skeletonFrm()
                break;
            case 'CARD':
                return skeletonCard()
                break;
            case 'TABLE':
                return skeletonTable()
                break;
            default:
                return (<React.Fragment>
                    <Grid item xs={12}>
                        <Skeleton variant="rectangular" height={30} animation="wave" />
                    </Grid>
                </React.Fragment>)
                break;
        }
    }
    const skeletonTable = () => {
        let fragment = []
        for (let index = 0; index < NoFilas; index++) {
            fragment.push(<>
                            <Grid item xs={12}>
                                <Skeleton variant="rectangular" height={30} />
                            </Grid>
                        </>)
        }
        return fragment
    }
    const skeletonCard = () => {
        let columns = (12 / NoColumnas)
        let fragment = []
        for (let index = 0; index < NoFilas; index++) {
            for (let index = 0; index < NoColumnas; index++) {
                fragment.push(<React.Fragment>
                    <Grid item xs={columns}>
                        <Stack spacing={1}>
                            {/* <Skeleton variant="text" sx={{ fontSize: '1rem' }} /> */}
                            {/* <Skeleton variant="circular" width={40} height={40} /> */}
                            <Skeleton variant="rectangular" height={350} />
                            {/* <Skeleton variant="rectangular" height={60} />
                            <Skeleton variant="rounded" height={60} /> */}
                        </Stack>
                    </Grid>
                </React.Fragment>)
            }
        }
        return fragment
    }
    const skeletonFrm = () => {
        let columns = (12 / NoColumnas)
        let fragment = []
        for (let index = 0; index < NoFilas; index++) {
            for (let index = 0; index < NoColumnas; index++) {

                fragment.push(<React.Fragment>
                    <Grid item xs={columns}>
                        <Skeleton variant="rectangular" height={30} animation="wave" />
                    </Grid>
                </React.Fragment>)
            }
        }
        return fragment
    }

    return (
        <Grid container width={'100%'} display={"flex"} alignItems={"center"} justifyContent={"center"} spacing={2}>
            {
                switchSkeleton()
            }
        </Grid>

    )
}


