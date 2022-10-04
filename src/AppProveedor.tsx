
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './Auth';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

export const AppProveedor = () => {
    return (
        <AuthProvider>
            <Suspense fallback={<p>Cargando...</p>}>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </Suspense>
        </AuthProvider>
    )
}
