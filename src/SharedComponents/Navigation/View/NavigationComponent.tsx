import { Box, List, ListItemButton, ListItemIcon, ListItemText, ListItem, Typography, Grid, Fab } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import { NavigationModel } from '../model/modelNavigation';
import { theme } from '../../../theme/theme';
import { MenuOpen } from '@mui/icons-material';
import { tamLay, useNavigationComponent } from '../hook/useNavigationComponent';
// import { NavigationModel } from '../model/modelNAvigation';


type props = {

    options: NavigationModel[],
    sizeLayout: (sizeL: tamLay) => void,
    showcolapse?: boolean

}


export const NavigationComponent = ({ options, sizeLayout, showcolapse }: props) => {


    if (showcolapse == undefined) showcolapse = true;
    const { hanbleClickMenu, handleListItemClick, displayMenu, displayText, sizeGrid, containerRef, selectedIndex } = useNavigationComponent(sizeLayout, options);

    return (
        <Grid container item spacing={0} {...sizeGrid} >
            <Box sx={{
                width: '100%',
                // borderRight: "1px solid #ebebeb",
                height: 'calc(100vh - 82px)',
                overflow: "hidden",
                background: "#FBFBFB"


            }}>
                {showcolapse
                    ? <Box display={"flex"} justifyContent={displayMenu} sx={{ paddingRight: 1, pt: 1.5 }}
                        ref={containerRef}
                    >
                        <Fab onClick={hanbleClickMenu} size='small' sx={{ background: '#0CBBE2', boxShadow: '0px 8px 8px -1px rgba(0, 0, 0, 0.08), 0px 10px 28px rgba(0, 0, 0, 0.02), 0px 2px 20px rgba(0, 0, 0, 0.04);' }}>
                            <MenuOpen />

                        </Fab>

                    </Box>
                    : null}

                <List component="nav" aria-label="main mailbox folders">
                    {
                        options.map(({ path, Icono, texto }, index) => {
                            return (
                                <NavLink
                                    key={path}
                                    className={"nav-link"}
                                    style={{ textDecoration: "none", color: theme.palette.secondary.light }} to={path}>
                                    <ListItem disablePadding alignItems='center'>
                                        <ListItemButton
                                            key={"ListItemButton" + path}
                                            className='ListJk'
                                            sx={{ display: 'flex', justifyContent: 'center' }}
                                            selected={selectedIndex === index}
                                            onClick={(event) => handleListItemClick(event, index)}
                                        >
                                            <ListItemIcon sx={{ minWidth: 'auto' }} key={"ListItemIcon" + path} color={theme.palette.secondary.main}>
                                                <Icono />

                                            </ListItemIcon>
                                            <ListItemText sx={{ display: displayText, pl:2 }}>
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
