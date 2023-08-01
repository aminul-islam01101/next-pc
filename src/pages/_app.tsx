/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css';
import { ConfigProvider } from 'antd';
import type { NextPage } from 'next';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';

import theme from '@/configs/antConfigs';
import { store } from '@/redux/store';
import Navbar from '@/components/shared/Navbar';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  // return getLayout(
  //   <Provider store={store}>
  //     <ConfigProvider theme={theme}>
  //       <Component {...pageProps} />
  //     </ConfigProvider>
  //   </Provider>
  // );
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        {getLayout(
          <ConfigProvider theme={theme}>
            <Navbar />
            <Component {...pageProps} />
          </ConfigProvider>
        )}
      </SessionProvider>
    </Provider>
  );
}
