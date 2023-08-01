import { NextApiRequest, NextApiResponse } from 'next';

import { dbConnect } from '../../../libs/dbConnect';
import { Product } from '../models/productModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { categoryName } = req.query;
  // function formatCategoryName(category: string) {
  //   const formattedCategory = category
  //     .split('-')
  //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(' ');

  //   return formattedCategory;
  // }
  // const category = formatCategoryName(categoryName as string);
  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const products = await Product.find({ category: categoryName }).exec();
        console.log('🌼 🔥🔥 file: [categoryName].ts:24 🔥🔥 handler 🔥🔥 products🌼', products);

        res.status(200).send({ message: 'success', data: products });
      } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ error: 'Error fetching products by category' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method as string} Not Allowed`);
  }
}
