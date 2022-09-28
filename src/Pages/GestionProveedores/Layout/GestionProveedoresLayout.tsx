import { Box, Toolbar } from "@mui/material"
import { HeaderPages } from "../Components/HeaderPages";
import { SubMenu } from "../Components/SubMenu"

const drawerWidth = 280;
export const GestionProveedoresLayout = ({ children }: any) => (
    <Box sx={{ display: 'flex', backgroundColor:"#e8e8e8" }}>
        <HeaderPages drawerWidth={drawerWidth} />
        <SubMenu drawerWidth={drawerWidth} />
        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />
            {children}
        </Box>
    </Box>
)
