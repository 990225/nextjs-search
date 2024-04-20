import { doublePrecision, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const productsTable = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
  name: text('name'),
  imageId: text('imageId'),
  description: text('description'),
  price: doublePrecision('price'),
});

export type Product = typeof productsTable.$inferSelect;
export type NewProduct = typeof productsTable.$inferInsert;
