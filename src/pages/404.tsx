/* eslint-disable @typescript-eslint/no-floating-promises */
import { Button } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react'; // Import useEffect hook

import ErrorImg from '@/assets/images/404_Error_Page.png';

const NotFoundPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div style={{ textAlign: 'center' }}>
      <Head>
        <title>PH-News-404 Not Founds as</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={ErrorImg}
        width={700}
        alt="error_image"
        style={{ display: 'flex', margin: '50px auto' }}
      />
      <Link href="/">
        <Button>Back To Homer</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
