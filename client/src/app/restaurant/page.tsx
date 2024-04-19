import { ItemCard } from '@/components/food/ItemCard';
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { SelectDemo } from '@/components/food/CategorySelect';
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <Layout>
      <div className="pt-16 px-10">
        <div className='py-4 flex items-center justify-between'>
          <Link href={'/'} className='px-5 text-sm py-2 border rounded-lg' >Back</Link>
          <SelectDemo />
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 "
        >
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </Layout>

  );
};

export default Page;

