import { NextApiRequest, NextApiResponse } from 'next';

import { dbConnect } from '../../../libs/dbConnect';
import { Product, TProduct } from '../models/productModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();

    const { productId } = req.query;

    switch (req.method) {
      case 'GET': {
        const product: TProduct | null = await Product.findOne({ _id: productId });
        console.log('🌼 🔥🔥 file: [productId].ts:15 🔥🔥 handler 🔥🔥 product🌼', product);

        if (!product) {
          return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).send({ message: 'success', data: product });
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
