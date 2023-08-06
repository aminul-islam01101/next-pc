import { NextApiRequest, NextApiResponse } from 'next';

import { dbConnect } from '../../../libs/dbConnect';
import { Product } from '../models/productModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    switch (req.method) {
      case 'GET': {
        // Get the total count of products in the database
        const totalProducts = await Product.countDocuments();

        // Generate an array of random indices
        const randomIndices = Array.from({ length: 6 }, () =>
          Math.floor(Math.random() * totalProducts)
        );

        // Fetch random 6 products from the database
        const products = await Product.find({}).skip(randomIndices[0]).limit(6);

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
