import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '@/components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const Welcome = Loadable(lazy(() => import('../../pages/Welcome')));
export const Shop = Loadable(lazy(() => import('../../pages/Shop')));

export const Page404 = Loadable(lazy(() => import('../../pages/error/Page404')));
