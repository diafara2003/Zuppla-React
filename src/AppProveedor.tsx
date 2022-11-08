
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './Auth';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { AlertPortal } from './SharedComponents/Alert';

export const AppProveedor = () => {
    return (
        <AuthProvider>
             
            <Suspense fallback={
                 <Backdrop
                     sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                     open={true}
                 >
                    <CircularProgress color="inherit" />
                 </Backdrop>
            }>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </Suspense>
        </AuthProvider>
    )
}
