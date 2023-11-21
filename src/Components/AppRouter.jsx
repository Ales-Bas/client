import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../router';
import { HOME_ROUTE } from '../utils/consts';
import { useSelector } from 'react-redux';
import IndexParts from '../pages/Parts Page/IndexParts';

export default function AppRouter() {
    const { isAuth } = useSelector((state) => state.user);

    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component} exact />
            )}
            {publicRoutes.map(({ path, Component, Children }) =>
                <Route key={path} path={path} element={Component}  >
                    {Children?.map(({ path, element }) =>
                        <Route key={path} path={path} element={element} />

                    )}
                    <Route index element={<IndexParts />} />

                </Route>
            )}

            <Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
        </Routes>
    )
}
