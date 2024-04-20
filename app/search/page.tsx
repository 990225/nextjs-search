import Image from 'next/image';
import Link from 'next/link';
import { ilike } from 'drizzle-orm';
import { db } from '@/db';
import { Product, productsTable } from '@/db/schema';

interface SearchPageProps {
  searchParams: {
    query: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { query } = searchParams;

  const products: Product[] = await db
    .select()
    .from(productsTable)
    .where(ilike(productsTable.name, `%${query}%`));

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center py-2 space-y-1 text-center">
        <h3 className="font-semibold">No results</h3>
        <p className="text-sm text-gray-500">
          Sorry, we couldn&apos;t find any matches for{' '}
          <span className="font-medium text-green-600 break-all">{query}</span>.
        </p>
      </div>
    );
  }

  return (
    <>
      {products.map(({ id, name, imageId, description, price }) => {
        return (
          <Link className="flex items-center gap-1" href={`/products/${id}`} key={id}>
            <Image className="w-1/2 rounded-md" src={`/images/${imageId}`} alt={name!} width={512} height={512} />

            <div className="space-y-1">
              <p className="font-medium line-clamp-1">{name}</p>
              <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
              <p className="text-sm font-medium">${price!.toFixed(2)}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}
