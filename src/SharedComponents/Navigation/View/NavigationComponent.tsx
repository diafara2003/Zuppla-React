import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Badge, ListItem, Typography, makeStyles, Grid } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { NavigationModel } from '../model/modelNavigation';
import { theme } from '../../../theme/theme';
// import { NavigationModel } from '../model/modelNAvigation';


type props = {

    options: NavigationModel[]

}



export const NavigationComponent = ({ options }: props) => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };
    return (
        <Grid item xs={2.3}>
            <Box sx={{
                width: '100%',
                // borderRight: "1px solid #ebebeb",
                height: 'calc(100vh - 82px)',
                overflow: "auto",
                background: "#FBFBFB"


            }}>
                <List component="nav" aria-label="main mailbox folders">
                    {
                        options.map(({ path, Icono, texto }, index) => {
                            return (
                                <NavLink
                                    key={path}
                                    className={"nav-link"}
                                    style={{ textDecoration: "none", color: theme.palette.secondary.light }} to={path}>
                                    <ListItem disablePadding>
                                        <ListItemButton
                                            key={"ListItemButton" + path}
                                            className='ListJk'
                                            selected={selectedIndex === index}
                                            onClick={(event) => handleListItemClick(event, index)}
                                        >
                                            <ListItemIcon key={"ListItemIcon" + path} color={theme.palette.secondary.main}>
                                                <Icono />

                                            </ListItemIcon>
                                            <ListItemText >
                                                <Typography variant='body2'> {texto} </Typography>
                                            </ListItemText>

                                        </ListItemButton>
                                    </ListItem>
                                </NavLink>
                            );
                        })
                    }

                </List>

            </Box>
        </Grid>

    )
}
