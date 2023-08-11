import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import CompactLayout from '../../layouts/compact';
import DashboardLayout from '../../layouts/dashboard';

// config
import { Page404, Welcome, Shop } from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Welcome />,
    },
    {
      path: '/yurs',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/shop" replace />, index: true },
        { path: 'shop', element: <Shop /> },
      ],
    },

    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
