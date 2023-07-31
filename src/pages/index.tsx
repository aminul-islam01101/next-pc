import type { ReactElement } from 'react';

import Header from '@/components/UI/Head';
import RootLayout from '@/components/layouts/RootLayout';

const Home = () => {
  const head = {
    title: 'Blog-Home',
    name: 'description',
    content: 'This is news portal of programming hero made by next-js',
  };

  return (
    <>
      <Header head={head} />
      <h1>hello next with husky </h1>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout >{page}</RootLayout>;
};

export default Home;
