
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './Auth';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Backdrop } from '@mui/material';

export const AppProveedor = () => {
    return (
        <AuthProvider>

            <Suspense fallback={
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                >
                    {/* <CircularProgress color="inherit" /> */}
                </Backdrop>
            }>
                <HashRouter>
                    <AppRouter />
                </HashRouter>
            </Suspense>
        </AuthProvider>
    )
}
