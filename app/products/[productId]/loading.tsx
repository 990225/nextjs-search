import BackButton from '@/components/BackButton';
import { Button } from '@/components/ui/button';
import { Check, Shield } from 'lucide-react';

export default function ProductPageLoading() {
  return (
    <div className="flex flex-col items-start gap-3 !mt-0 animate-pulse">
      <BackButton />

      <div className="w-full aspect-square bg-gray-300 rounded-md" />

      <div className="space-y-2 w-full">
        <div className="w-2/3 h-7 bg-gray-300 rounded-md"></div>

        <div className="space-y-1">
          <div className="w-11/12 h-5 bg-gray-300 rounded-md"></div>
          <div className="w-11/12 h-5 bg-gray-300 rounded-md"></div>
          <div className="w-11/12 h-5 bg-gray-300 rounded-md sm:hidden"></div>
        </div>

        <div className="w-1/3 h-6 bg-gray-300 rounded-md"></div>
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
