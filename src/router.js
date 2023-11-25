import Home from './pages/Home';
//import MainMenu from './Components/MainMenu';
import PKatalog from './pages/PKatalog';
import TKatalog from './pages/TKatalog';
import Cart from './pages/Cart/Cart';
import ItemPage from './pages/ItemPage';
import InfoPage from './pages/InfoPage';
import ServicePage from './pages/ServicePage';
import CompanyPage from './pages/CompanyPage';
import OptionalPage from './pages/OptionalPage';

import {
    ADMIN_ROUTE,
    CART_ROUTE,
    COMPANY_ROUTE,
    HOME_ROUTE,
    INFOPAGE_ROUTE,
    LOGIN_ROUTE,
    PKATALOG_ROUTE,
    REGISTRATION_ROUTE,
    SERVICE_ROUTE,
    TKATALOG_ROUTE,
    TYPEPART_ROUTE,
    SEARCHPAGE_ROUTE,
    PARTS_ROUTE,
    PARTS_FILTER_ROUTE,
    PARTS_OIL_ROUTE,
    PARTS_INDEX_ROUTE,
    OPTIONAL_ROUTE,
    OPTIONAL_INFO_ROUTE,
    NOTPAGE_ROUTE
} from './utils/consts';
import AdminPage from './pages/AdminPage';
import AuthPage from './pages/AuthPage';
import SearchPage from './pages/searchPage';
import Parts from './pages/Parts';
import Filter from "./pages/Parts Page/Filter";
import Oil from './pages/Parts Page/Oil';
import IndexParts from './pages/Parts Page/IndexParts';
import OptionalInfoPage from './pages/OptionalInfoPage';
import NotPage from './pages/NotPage';

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <AdminPage />
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <AuthPage />
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: <Home />
    },
    {
        path: TKATALOG_ROUTE,
        Component: <TKatalog />
    },
    {
        path: CART_ROUTE,
        Component: <Cart />
    },
    {
        path: TYPEPART_ROUTE + '/:id',
        Component: <ItemPage />
    },
    {
        path: INFOPAGE_ROUTE + '/:id',
        Component: <InfoPage />
    },
    {
        path: SERVICE_ROUTE,
        Component: <ServicePage />
    },
    {
        path: COMPANY_ROUTE,
        Component: <CompanyPage />
    },
    {
        path: LOGIN_ROUTE,
        Component: <AuthPage />
    },
    {
        path: SEARCHPAGE_ROUTE,
        Component: <SearchPage />
    },
    {
        path: PARTS_ROUTE,
        Component: <Parts />,
        index: true,
        Children: [
            {
                path: PARTS_FILTER_ROUTE,
                element: <Filter />
            },
            {
                path: PARTS_OIL_ROUTE,
                element: <Oil />
            },
            {
                path: PKATALOG_ROUTE,
                element: <PKatalog />
            },
            {
                path: PARTS_INDEX_ROUTE,
                element: <IndexParts />
            },
        ]
    },
    {
        path: OPTIONAL_ROUTE,
        Component: <OptionalPage />
    },
    {
        path: OPTIONAL_INFO_ROUTE + '/:id',
        Component: <OptionalInfoPage />
    },
    {
        path: NOTPAGE_ROUTE,
        Component: <NotPage />
    },

]