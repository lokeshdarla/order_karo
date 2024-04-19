'use client'
import React from 'react'
import Layout from '@/components/Layout/Layout'
import { CartItem } from '@/components/food/CartItem'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'

const page = () => {
  return (
    <Layout>
      <div>
        <div className='pt-16 flex flex-col items-center justify-center explore_events p-2 gap-2'>
          <div className='flex items-start justify-center'>
            <div className="flex flex-col items-center justify-center explore_events p-2 gap-2 ">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
            <div className="mt-2 border p-4 w-80 bg-white rounded-lg shadow-md flex flex-col items-start justify-center">
              <div className="mb-4 ml-4">
                <span className="font-bold text-lg">Price:</span>
                <span className="ml-2 text-gray-700">$229.00</span>
              </div>
              <div className="mb-4 ml-4">
                <span className="font-bold text-lg">Subtotal:</span>
                <span className="ml-2 text-gray-700">$333.90</span>
              </div>
              <div className="mb-4 ml-4">
                <span className="font-bold text-lg">Total Price:</span>
                <span className="ml-2 text-gray-700">$2424.00</span>
              </div>
              <Button
                onClick={() => {
                  toast({
                    title: "Items Placed Successfully",
                    description: "Take your order in 40min",
                  })
                }}
                variant='outline' className='w-full'>
                Checkout
              </Button>
            </div>

          </div>

        </div>


      </div>
    </Layout >

  )
}

export default page
