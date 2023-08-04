import { ReactNode, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import LoadingScreen from '@/components/loading-screen/index';
import { RedirectToSignIn, SignedOut, useUser } from '@clerk/clerk-react';

interface PROPS {
  children: ReactNode;
}

export default function AuthGuard({ children }: PROPS) {
  const { isSignedIn, user, isLoaded } = useUser();

  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  if (!isSignedIn && !user) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return (
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    );
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <> {children} </>;
}
