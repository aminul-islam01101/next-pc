// models/Category.ts
import mongoose, { Document } from 'mongoose';

export type TCategory = Document & {
  categoryName: string;
  products: mongoose.Schema.Types.ObjectId[];
};

const categorySchema = new mongoose.Schema<TCategory>({
  categoryName: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

// export default mongoose.models.Category || mongoose.model<TCategory>('Category', categorySchema);
export const Category = mongoose.model<TCategory>('Category', categorySchema);
