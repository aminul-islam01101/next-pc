import { ReactElement } from 'react';

import { TProduct } from './api/models/productModel';

import FeaturedCategories from '@/components/UI/FeaturedCategories';
import Header from '@/components/UI/Head';
import Products from '@/components/UI/Products';
import RootLayout from '@/components/layouts/RootLayout';
import { url } from '@/configs/env.configs';
import { TGenericResponse } from '@/types/response';

type HomeProps = {
  categories: string[];
  products: TProduct[];
};

const Home = ({ categories, products }: HomeProps) => {
  const head = {
    title: 'Blog-Home',
    name: 'description',
    content: 'This is news portal of programming hero made by next-js',
  };

  return (
    <>
      <Header head={head} />
      <h1>hello next with husky test </h1>
      <h2>Featured Categories</h2>
      <FeaturedCategories categories={categories} />
      <h2>Featured Products</h2>
      <Products products={products} />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
export async function getStaticProps() {
  // if (typeof window === 'undefined') {
  //   return { props: { products: [] } };
  // }

  try {
    const response = await fetch(`${url}/api/categories`);
    const data = (await response.json()) as TGenericResponse;
    const categories = data?.data as string[];
    const productResponse = await fetch(`${url}/api/featured`);
    const productData = (await productResponse.json()) as TGenericResponse;
    const products = productData?.data as string[];
    return {
      props: {
        categories,
        products,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { notFound: true };
  }
}

export default Home;
