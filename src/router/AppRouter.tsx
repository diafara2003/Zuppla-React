
import { Route, Routes, } from 'react-router-dom';
import LoginPages from '../Pages/Login/views/LoginPages';
import { ProtectedRoutes } from './ProtectedRoutes';
import { routes } from './routes';
import RecuperarClavepages from '../Pages/Login/component/RecuperarClave/view/RecuperarClavepages';


export const AppRouter = () => {
    return (
        <>
            <Routes>


                <Route path="/login" element={<LoginPages />}></Route>
                <Route path="/recuperarclave" element={<RecuperarClavepages />}></Route>

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

