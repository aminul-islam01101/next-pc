import { GetServerSidePropsContext } from 'next';
import { FC } from 'react';

import { TProduct } from '../api/models/productModel';

import CategoryHorizontalCards from '@/components/UI/CategoryHorizontalCards';
import Header from '@/components/UI/Head';
import { url } from '@/configs/env.configs';
import { TGenericResponse } from '@/types/response';

const CategoryDetailsPage: FC<{ products: TProduct[] }> = ({ products }) => {
  const head = {
    title: 'Blog-Home',
    name: 'description',
    content: 'This is news portal of programming hero made by next-js',
  };

  return (
    <div className="container">
      <Header head={head} />
      <h1 className="text-5xl">Products in {products[0]?.category} category</h1>
      <CategoryHorizontalCards products={products} />
    </div>
  );
};

export default CategoryDetailsPage;

// CategoryDetailsPage.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // if (typeof window === 'undefined') {
  //   return { props: { products: [] } };
  // }

  const { params } = context;

  if (!params || typeof params?.categoryName !== 'string') {
    // Handle the case when categoryName is missing or not a string
    return {
      props: {
        products: [],
      },
    };
  }

  try {
    const response = await fetch(`${url}/api/categories/${params.categoryName}`);
    const data = (await response.json()) as TGenericResponse;
    const products = data?.data as TProduct[];
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { notFound: true };
  }
}
