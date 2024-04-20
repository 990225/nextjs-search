'use client';

import { useRef, useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { LoaderCircle, Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultQuery = searchParams.get('query') || '';
  const [query, setQuery] = useState<string>(defaultQuery);

  const search = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  };

  return (
    <div className="relative w-full">
      <Input
        className="pr-[3.75rem]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            search();
          }

          if (e.key === 'Escape') {
            inputRef.current?.blur();
          }
        }}
        disabled={isSearching}
      />
      <Button className="absolute right-0 top-0 px-3 rounded-l-none" onClick={search} disabled={isSearching}>
        {isSearching ? <LoaderCircle className="animate-spin" /> : <Search />}
      </Button>

      <div className="absolute left-0 -bottom-4 w-full h-4 bg-gradient-to-b from-white -z-10"></div>
    </div>
  );
}
