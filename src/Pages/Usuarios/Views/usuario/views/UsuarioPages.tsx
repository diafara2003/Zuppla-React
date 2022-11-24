import { HeaderComponent } from '../../../../../SharedComponents/Header'
import { UserProvider } from '../../../context/userContext';

import { Box } from '@mui/material';
import { UserLayout } from '../layout/userLayout';

export const UsuarioPages = () => {

  
    return (
        <>
           
            <UserProvider>
                <Box m={1} sx={{background: 'white', height: 'calc(100vh - 150px)' }}>
                    <UserLayout />
                </Box>
            </UserProvider>
        </>
    )
}


export default UsuarioPages;