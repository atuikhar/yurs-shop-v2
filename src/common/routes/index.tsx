import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import CompactLayout from '../../layouts/compact';
import DashboardLayout from '../../layouts/dashboard';

// config
import { PATH_AFTER_LOGIN } from '../../config-global';
//
import { HomePage, Page404, NextPage } from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'home', element: <HomePage /> },
        { path: 'next', element: <NextPage /> },
      ],
    },
    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
