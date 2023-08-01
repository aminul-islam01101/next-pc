import mongoose, { Document, Schema, models } from 'mongoose';

type TReview = {
  reviewer: string;
  time: string;
  message: string;
};

export type TProduct = Document & {
  image: string;
  productName: string;
  category: string;
  status: 'In Stock' | 'Out of Stock';
  price: number;
  description: string;
  keyFeatures: string[];
  individualRating: number;
  averageRating: number;
  reviews: TReview[];
  createdAt: Date;
};
const reviewSchema: Schema = new Schema({
  reviewer: { type: String, required: true },
  time: { type: String, required: true },
  message: { type: String, required: true },
});

const productSchema: Schema = new Schema({
  image: { type: String, required: true },
  productName: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, enum: ['In Stock', 'Out of Stock'], required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  keyFeatures: { type: [String], required: true },
  individualRating: { type: Number, default: 0 },
  averageRating: { type: Number, default: 0 },
  reviews: { type: [reviewSchema], default: [] },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
});

export const Product = models.Product || mongoose.model<TProduct>('Product', productSchema);
