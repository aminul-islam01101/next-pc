import { GetStaticPropsContext } from 'next';
import { FC } from 'react';

import { TProduct } from '../api/models/productModel';

import Header from '@/components/UI/Head';
import Products from '@/components/UI/Products';
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
      <h1 className="text-5xl">Products in {products[0].category} category</h1>
      <Products products={products} />
    </div>
  );
};

export default CategoryDetailsPage;

// CategoryDetailsPage.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };
export const getStaticPaths = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/categories');
    const data = (await response.json()) as TGenericResponse;
    const categories = data?.data as string[];

    const paths = categories.map((category) => ({
      params: { categoryName: category },
    }));

    return { paths, fallback: false };
  } catch (error) {
    // Handle any error that occurs during the fetch
    console.error('Error fetching categories:', error);
    return { paths: [], fallback: false };
  }
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  if (!params || typeof params.categoryName !== 'string') {
    // Handle the case when categoryName is missing or not a string
    return { notFound: true };
  }

  try {
    const response = await fetch(`http://localhost:3000/api/categories/${params.categoryName}`);
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
