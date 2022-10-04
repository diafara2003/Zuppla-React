
import { Route, Routes, } from 'react-router-dom';

import LoginPages from '../Pages/Login/views/LoginPages';
import { ProtectedRoutes } from './ProtectedRoutes';
import { routes } from './routes';
import { Suspense } from 'react';
import HomePages from '../Pages/Home/views/HomePages';


export const AppRouter = () => {
    return (

        <Routes>

            <Route path="/login" element={<LoginPages />}></Route>

            <Route element={<ProtectedRoutes />}>

                {
                    routes.map(({ path, component }) => {
                        return (
                            <Route
                                key={path}
                                path={path}
                                element={<Suspense fallback={<>...</>}>
                                    <component />
                                </Suspense>} />
                        );
                    })
                }

            </Route>

        </Routes>


    )
}

