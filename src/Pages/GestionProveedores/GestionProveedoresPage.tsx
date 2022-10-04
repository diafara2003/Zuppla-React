import { Box, Toolbar } from '@mui/material'

import { SubMenu } from './Components/NavigationMenu/View/SubMenu'
import RoutesGestionProveedores from './Routes/RoutesGestionProveedores'
import { HeaderComponent } from '../../SharedComponents/Header'


const drawerWidth = 280;
export const GestionProveedoresPage = () => {
    return (
        <>
            <Box sx={{ display: 'flex', backgroundColor: "white" }}>
                <HeaderComponent title={"sadasdas"} marginLeft={drawerWidth} />
                <SubMenu drawerWidth={drawerWidth} />
                <Box
                >
                    <Toolbar />
                    <Box sx={{ mt: 0 }}>
                        <RoutesGestionProveedores />
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default GestionProveedoresPage;