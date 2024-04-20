'use client';

import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';

export default function BackButton() {
  const router = useRouter();

  return (
    <Button className="gap-1 pl-2 w-full" variant="secondary" onClick={() => router.back()}>
      <ChevronLeft className="w-5 h-5" />
      Back
    </Button>
  );
}
