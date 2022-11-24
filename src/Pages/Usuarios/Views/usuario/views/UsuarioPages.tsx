import { HeaderComponent } from '../../../../../SharedComponents/Header'
import { UserProvider } from '../../../context/userContext';

import { Box } from '@mui/material';
import { UserLayout } from '../layout/userLayout';

export const UsuarioPages = () => {

  
    return (
        <>
           
            <UserProvider>
                <Box >
                    <UserLayout />
                </Box>
            </UserProvider>
        </>
    )
}


export default UsuarioPages;