'use client'
import React from 'react'
import Layout from '@/components/Layout/Layout'
import { CartItem } from '@/components/food/CartItem'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import OrderItem from '@/components/food/OrderItem'

const page = () => {
  return (
    <Layout>
      <div>
        <div className='pt-16 flex flex-col items-center justify-center explore_events p-2 gap-2'>
          <div>
            <h2 className='text-3xl py-4'>Order History</h2>
          </div>
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
    </Layout >

  )
}

export default page
