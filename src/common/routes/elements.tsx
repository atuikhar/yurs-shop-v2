import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const HomePage = Loadable(lazy(() => import('../../pages/Home')));
export const NextPage = Loadable(lazy(() => import('../../pages/NextPage')));

export const Page404 = Loadable(lazy(() => import('../../pages/error/Page404')));
