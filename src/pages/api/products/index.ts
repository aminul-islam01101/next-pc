import { NextApiRequest, NextApiResponse } from 'next';

import { dbConnect } from '../../../libs/dbConnect';
import { Product } from '../models/productModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    switch (req.method) {
      case 'GET': {
        const products = await Product.find({});
        res.status(200).send({ message: 'success', data: products });
        break;
      }
      default: {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method as string} Not Allowed`);
        break;
      }
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
/* To get all categories: /api/categories
To get all products in a single category: /api/categories/[categoryId]
To get all products: /api/products
To get a single product: /api/products/[productId] */
