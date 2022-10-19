import { Box, List, ListItemButton, ListItemIcon, ListItemText, Divider, Badge, ListItem, Typography, makeStyles, Grid, Fab, Slide } from '@mui/material';
import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import { NavigationModel } from '../model/modelNavigation';
import { theme } from '../../../theme/theme';
import { MenuOpen } from '@mui/icons-material';
// import { NavigationModel } from '../model/modelNAvigation';


type props = {

    options: NavigationModel[],
    sizeLayout: (sizeL:number) =>void

}


type typeDisplay = "end" | "start" | "none" | "block";

type typeDirection = "right" | "left";

export const NavigationComponent = ({ options, sizeLayout }: props) => {


    const [selectedIndex, setSelectedIndex] = useState(0);
    const [sizeGrid, setSizeGrid] = useState(2.2);
    const [displayMenu, setMenuDisplay] = useState<typeDisplay>("end");
    const [displayText, setMenuText] = useState<typeDisplay>("end");
    const containerRef = useRef(null);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    const hanbleClickMenu = () => {
        setMenuDisplay((prev) => {

            if (prev == "end") {
                setSizeGrid(0.5);
                sizeLayout(11.4)
                setMenuText("none");
                return "start";
            }
            else {
                setSizeGrid(2.1);
                sizeLayout(9.8)
                setMenuText("block");
                return "end";
            }
        });
    }
    return (
        <Grid item xs={sizeGrid}>
            <Box sx={{
                width: '100%',
                // borderRight: "1px solid #ebebeb",
                height: 'calc(100vh - 82px)',
                overflow: "auto",
                background: "#FBFBFB"


            }}>

                <Box display={"flex"} justifyContent={displayMenu} sx={{ paddingRight: 1, pt: 1.5 }}
                    ref={containerRef}
                >
                    <Fab onClick={hanbleClickMenu} size='small' sx={{ background: '#0CBBE2', boxShadow: '0px 8px 8px -1px rgba(0, 0, 0, 0.08), 0px 10px 28px rgba(0, 0, 0, 0.02), 0px 2px 20px rgba(0, 0, 0, 0.04);' }}>
                        <MenuOpen />

                    </Fab>

                </Box>
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
                                            selected={selectedIndex === index}
                                            onClick={(event) => handleListItemClick(event, index)}
                                        >
                                            <ListItemIcon key={"ListItemIcon" + path} color={theme.palette.secondary.main}>
                                                <Icono />

                                            </ListItemIcon>
                                            <ListItemText sx={{ display: displayText }}>
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
