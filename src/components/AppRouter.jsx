import React from 'react';
import {privateRoutes, publicRoutes} from "../router";
import {Routes, Route} from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const AppRouter = () => {
    return (
        <>
            <Routes>
                {
                    publicRoutes.map(
                        route =>
                        <Route
                            element={route.element}
                            path={route.path}
                            key={route.path}
                        />
                    )
                }
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </>
    )
}

export default AppRouter