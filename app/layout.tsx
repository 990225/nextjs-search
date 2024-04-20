import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SearchBar from '@/components/SearchBar';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js 14 Search',
  description:
    'Developed using Next.js 14, this web application provides functionality to search data based on user-entered keywords.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-3xl mx-auto">
          <div className="sticky top-0 flex flex-col items-center gap-6 p-6 pb-0 bg-white z-10">
            <h1 className="text-4xl font-bold">Search</h1>

            <SearchBar />
          </div>

          <div id="container" className="p-6 pt-3 space-y-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
