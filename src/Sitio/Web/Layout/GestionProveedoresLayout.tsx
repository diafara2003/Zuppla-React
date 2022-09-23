import { Box } from "@mui/material"
import { SubMenu } from "../Components/SubMenu"

const drawerWidth = 280;
export const GestionProveedoresLayout = ({ children }: any) => (
    <Box sx={{ display: 'flex' }}>
        <SubMenu drawerWidth={drawerWidth} />
        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            {children}
        </Box>
    </Box>
)
