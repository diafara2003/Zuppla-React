import { Grid, Skeleton, Stack } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';

type typeSkeleton = "" | "formulario" | "card" | "table";

type props = {
    NoColumnas: number,
    NoFilas: number,
    Tipo: typeSkeleton // 'FRM' , 'CARD', 'TABLE'
}

export const SkeletonDinamic = ({ NoColumnas, NoFilas, Tipo }: props) => {
    const switchSkeleton = () => {
        switch (Tipo) {
            case 'formulario':
                return skeletonFrm()
               
            case 'card':
                return skeletonCard()
               
            case 'table':
                return skeletonTable()
               
            default:
                return (
                    <Grid item xs={12} key={`skeleton-dynamic-default-${uuidv4()}`}>
                        <Skeleton key={`skeleton-default-${uuidv4()}`} variant="rectangular" height={30} animation="wave" />
                    </Grid>
                )
               
        }
    }
    const skeletonTable = () => {
        let fragment = []
        for (let index = 0; index < NoFilas; index++) {
            fragment.push(
                <Grid key={`skeleton-dynamic-table-${uuidv4()}`} item xs={12}>
                    <Skeleton key={`skeleton-table-${uuidv4()}`} variant="rectangular" height={30} />
                </Grid>
            )
        }
        return fragment
    }
    const skeletonCard = () => {
        let columns = (12 / NoColumnas)
        let fragment = []
        for (let index = 0; index < NoFilas; index++) {
            for (let index = 0; index < NoColumnas; index++) {
                fragment.push(
                    <Grid key={`skeleton-dynamic-card-${uuidv4()}`} item xs={columns}>
                        <Stack spacing={1}>
                            <Skeleton key={`skeleton-card-${uuidv4()}`} variant="rectangular" height={350} />

                        </Stack>
                    </Grid>
                )
            }
        }
        return fragment
    }
    const skeletonFrm = () => {
        let columns = (12 / NoColumnas)
        let fragment = []
        for (let index = 0; index < NoFilas; index++) {
            for (let index = 0; index < NoColumnas; index++) {

                fragment.push(
                    <Grid key={`skeleton-dynamic-form-${uuidv4()}`} item xs={columns}>
                        <Skeleton key={`skeleton-form-${uuidv4()}`} variant="rectangular" height={30} animation="wave" />
                    </Grid>
                )
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


