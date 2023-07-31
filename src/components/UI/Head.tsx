import Head from 'next/head';
import { FC } from 'react';

type HeadProps = {
  head: { title: string; name: string; content: string };
};

const Header: FC<HeadProps> = ({ head }) => {
  const { title, name, content } = head;
  return (
    <Head>
      <title>{title}</title>
      <meta name={name} content={content} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
