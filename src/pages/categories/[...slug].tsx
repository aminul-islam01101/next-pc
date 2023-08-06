import { GetStaticPropsContext } from 'next';
import { FC } from 'react';

import { TProduct } from '../api/models/productModel';

import Product from '@/components/UI/Product';
import { url } from '@/configs/env.configs';
import { TGenericResponse } from '@/types/response';

type ProductDetailPageProps = {
  product: TProduct;
};

const ProductDetailPage: FC<ProductDetailPageProps> = ({ product }) => {
  return (
    <div>
      <Product product={product} />
    </div>
  );
};

export default ProductDetailPage;

export const getStaticPaths = async () => {
  try {
    const response = await fetch(`${url}/api/products`);
    const data = (await response.json()) as TGenericResponse;
    const products = data?.data as TProduct[];

    const paths = products?.map((product) => ({
      params: { slug: [product.category, product._id as string] },
    }));

    return { paths, fallback: false };
  } catch (error) {
    // Handle any error that occurs during the fetch
    console.error('Error fetching products:', error);
    return { paths: [], fallback: false };
  }
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;

  if (!params || !Array.isArray(params.slug) || params.slug.length !== 2) {
    return {
      props: {
        product: null,
      },
    };
  }

  try {
    const [category, productId] = params.slug;
    const response = await fetch(`${url}/api/products/${productId}`);
    const data = (await response.json()) as TGenericResponse;
    const product = data?.data as TProduct;

    if (!product || product.category !== category) {
      return { notFound: true };
    }

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { notFound: true }; // Return 404 page in case of any error
  }
}
