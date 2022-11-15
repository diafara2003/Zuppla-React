import { HeaderComponent } from '../../../../../SharedComponents/Header'
import { UserProvider } from '../../../context/userContext';

import { Box } from '@mui/material';
import { UserLayout } from '../../..';

export const UsuarioPages = () => {

  
    return (
        <>
            <HeaderComponent title={"Usuarios"} />
            <UserProvider>
                <Box sx={{ m: '1px', background: 'white', height: 'calc(100vh - 150px)' }}>
                    <UserLayout />
                </Box>
            </UserProvider>
        </>
    )
}


export default UsuarioPages;