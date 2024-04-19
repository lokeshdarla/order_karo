import Layout from '@/components/Layout/Layout'
import { CarouselHome } from '@/components/home/HomeCarousel'
import { RestaurantCard } from '@/components/home/RestaurantCard'
import React from 'react'

const page = () => {
  return (
    <Layout>
      <div>
        <div className='pt-16'>
          <div className="flex flex-col items-center justify-center explore_events p-2 gap-2 ">
            <RestaurantCard />
            <RestaurantCard />
          </div>
        </div>


      </div>
    </Layout>

  )
}

export default page
