import { ReactNode } from 'react';

import { Helmet } from 'react-helmet-async';

type PageProps = {
  children: ReactNode;
  title: string;
  footer?: boolean;
};

export default function Page({ children, title }: PageProps) {
  return (
    <>
      <Helmet>
        <title>{`${title} | yurs-shop`}</title>
      </Helmet>

      {children}
    </>
  );
}
