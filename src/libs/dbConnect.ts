// import mongoose, { Connection } from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI || '';
// console.log('🌼 🔥🔥 file: dbConnect.ts:4 🔥🔥 MONGODB_URI🌼', MONGODB_URI);

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cachedDb: Connection | null = null;

// export async function dbConnect(): Promise<Connection> {
//   if (cachedDb) {
//     return cachedDb;
//   }

//   try {
//     const db = await mongoose.connect(MONGODB_URI);

//     cachedDb = db.connection;
//     return db.connection;
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     throw new Error('Error connecting to MongoDB');
//   }
// }
import mongoose from 'mongoose';

export const dbConnect = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  }
  return mongoose.connect(process.env.MONGODB_URI as string);
};
