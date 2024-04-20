import OutletLayout from '@/components/Layout/OutletLayout'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <OutletLayout>
      <div className="flex flex-col gap-10 h-full w-full items-center justify-center">
        <div className="text-2xl text-gray-400">
          Hold on tight, we&apos;re working on this page.
        </div>
        <Link href={'/outlet/inventory'} className=' px-4 py-2 text-base border border-gray-500  rounded-lg'>Inventory</Link>
      </div>
    </OutletLayout>

  )
}

export default page
