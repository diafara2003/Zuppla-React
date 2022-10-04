
import { Route, Routes, } from 'react-router-dom';

import LoginPages from '../Pages/Login/views/LoginPages';
import { MenuPages } from '../Pages/Menu/views/MenuPages';
import { AuthPages } from '../Auth';
import { GestionProveedoresPage } from '../Pages/GestionProveedores/';
import { ProtectedRoutes } from './ProtectedRoutes';
import { HomePages } from '../Pages/Home/views/HomePages';
import { routes } from './routes';


export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="/login" element={<LoginPages />}></Route>

                <Route element={<ProtectedRoutes />}>

                    {
                        routes.map(({ path, Component: Component }) => {
                            return (
                                <Route
                                    key={path}
                                    path={path}
                                    element={<Component />} />
                            );
                        })
                    }
                    {/* <Route path="/" element={<HomePages />}></Route>
                    <Route path="/home" element={<HomePages />}></Route> */}



                    {/* <Route path="/gestionproveedor/*" element={<GestionProveedoresPage />} /> */}
                </Route>

            </Routes>
        </>

    )
}

