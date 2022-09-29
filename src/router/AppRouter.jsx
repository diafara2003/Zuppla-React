import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <>

            <Routes>

                <Route path="login/*" element={
                    <PublicRoute>
                        {/* <LoginPage /> */}
                        <Routes>
                            <Route path="/*" element={<LoginPage />} />
                        </Routes>
                    </PublicRoute>
                }
                />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </>
    )
}
