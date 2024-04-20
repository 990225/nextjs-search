import { notFound } from 'next/navigation';
import Image from 'next/image';
import { eq } from 'drizzle-orm';
import { Check, Shield } from 'lucide-react';
import { db } from '@/db';
import { productsTable } from '@/db/schema';
import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = params;
  if (!productId) {
    return notFound();
  }

  const [product] = await db.select().from(productsTable).where(eq(productsTable.id, productId));
  if (!product) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-start gap-3">
      <BackButton />

      <Image
        className="w-full rounded-md"
        src={`/images/${product.imageId}`}
        alt={product.name!}
        width={512}
        height={512}
      />

      <div className="space-y-2 w-full">
        <p className="text-xl font-bold">{product.name}</p>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="font-semibold">${product.price!.toFixed(2)}</p>
      </div>

      <p className="flex justify-center gap-1 w-full text-sm text-gray-700">
        <Check className="w-5 h-5 text-green-500" />
        Eligible for express delivery
      </p>

      <Button className="w-full">Add to cart</Button>

      <p className="flex justify-center gap-1 w-full text-sm text-medium text-gray-700">
        <Shield className="w-5 h-5 text-gray-400" />
        30 Day Return Guarantee
      </p>
    </div>
  );
}
