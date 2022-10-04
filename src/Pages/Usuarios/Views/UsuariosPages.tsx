import React from 'react'
import { HeaderComponent } from '../../../SharedComponents/Header';
import { NavigationComponent } from '../../../SharedComponents/Navigation';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

import BusinessIcon from '@mui/icons-material/Business';
import ContactsIcon from '@mui/icons-material/Contacts';
import { NavigationModel } from '../../../SharedComponents/Navigation/model/modelNavigation';



export const UsuariosPages = () => {


    const rutas: NavigationModel[] = [

        {
            path: "/usuario",
            texto: "Usuarios",

            Icono:()=> < BusinessIcon />
        },
        {
            path: "/perfil",
            texto: "perfiles",
            Icono:()=> < ContactsIcon />
        },
    ]

    return (
        <Grid container spacing={2} >
            <Grid item xs={2.5} >
                <NavigationComponent options={rutas} />

            </Grid>
            <Grid item xs={9.5} >
                <HeaderComponent title={"Usuarios"} />
            </Grid>
        </Grid>
    )
}


export default UsuariosPages;