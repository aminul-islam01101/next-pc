import { NextApiRequest, NextApiResponse } from 'next';

import { dbConnect } from '../../../libs/dbConnect';
import { Product } from '../models/productModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    switch (req.method) {
      case 'GET': {
        const categories = await Product.distinct('category');
        res.status(200).send({ message: 'success', data: categories});

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
