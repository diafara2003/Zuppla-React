import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Badge, ListItem, Typography } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Height } from '@mui/icons-material';
import { NavigationModel } from '../model/modelNavigation';
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
        <Box sx={{
            width: '100%',
            borderRight: "1px solid #ebebeb",
            height: 'calc(100vh - 234px)',
            overflow: "auto"


        }}>
            <List component="nav" aria-label="main mailbox folders">
                {
                    options.map(({ path, Icono, texto }, index) => {
                        return (
                            <NavLink
                                key={path}
                                className={"nav-link"}
                                style={{ textDecoration: "none", color: "black" }} to={path}>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        key={"ListItemButton" + path}
                                        className='ListJk'
                                        selected={selectedIndex === index}
                                        onClick={(event) => handleListItemClick(event, index)}
                                    >
                                        <ListItemIcon sx={{ color: "#1E62A1" }} key={"ListItemIcon" + path}>
                                            <Icono />

                                        </ListItemIcon>
                                        <ListItemText color='#1E62A1'>
                                            <Typography sx={{ color: "#1E62A1" }} > {texto} </Typography>
                                        </ListItemText>

                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                        );
                    })
                }

            </List>

        </Box>
    )
}
