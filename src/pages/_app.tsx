/* eslint-disable react/jsx-props-no-spreading */

import '@/styles/globals.css';
import { ConfigProvider } from 'antd';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';

import theme from '@/configs/antConfigs';
import { store } from '@/redux/store';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
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
      {getLayout(
        <ConfigProvider theme={theme}>
          <Component {...pageProps} />
        </ConfigProvider>
      )}
    </Provider>
  );
}

// export async function getStaticProps() {
//   // Fetch the categories data from the API route
//   const response = await fetch('/api/categories');
//   const categoriesData = (await response.json()) as TProduct;
//   return {
//     props: {
//       categoriesData,
//     },
//   };
// }
