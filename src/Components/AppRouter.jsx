import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../router';
import { HOME_ROUTE } from '../utils/consts';

export default function AppRouter() {
    const isAuth = true
    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component} exact />
            )}
            <Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
        </Routes>
    )
}
