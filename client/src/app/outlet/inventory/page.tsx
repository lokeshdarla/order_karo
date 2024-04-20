import OutletLayout from '@/components/Layout/OutletLayout'
import { DataTableDemo } from '@/components/outlet/inventory'
import React from 'react'

const page = () => {
  return (
    <OutletLayout>
      <div className='fixed w-full z-20 '>
        <div className="flex h-12 items-center sticky justify-between border-b border-gray-200 bg-white px-3 md:px-6">
          <h4 className="font-sans text-lg font-semibold tracking-normal text-gray-700">
            Inventory
          </h4>
        </div>
      </div>
      <div className='pt-14'>
        <DataTableDemo />
      </div>

    </OutletLayout>

  )
}

export default page;
