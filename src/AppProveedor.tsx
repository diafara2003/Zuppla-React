
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './Auth';
import { BrowserRouter } from 'react-router-dom';

export const AppProveedor = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AuthProvider>
    )
}
