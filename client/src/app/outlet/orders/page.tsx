'use client'
import React from 'react'
import Layout from '@/components/Layout/Layout'
import { CartItem } from '@/components/food/CartItem'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import OrderItem from '@/components/outlet/OrderItem'
import OutletLayout from '@/components/Layout/OutletLayout'

const page = () => {
  return (
    <OutletLayout>
      <div>
        <div className='fixed w-full z-20 '>
          <div className="flex h-12 items-center sticky justify-between border-b border-gray-200 bg-white px-3 md:px-6">
            <h4 className="font-sans text-lg font-semibold tracking-normal text-gray-700">
              Order History
            </h4>
          </div>
        </div>
        <div className='pt-14 flex flex-col items-center justify-center explore_events p-2 gap-2'>


          <div className='flex items-start justify-center'>
            <div className="flex flex-col items-center justify-center explore_events p-2 gap-3">
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </div>
          </div>
        </div>
      </div>
    </OutletLayout >

  )
}

export default page
