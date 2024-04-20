'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const page = () => {
  const router = useRouter();
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <Image src={'/logo.svg'} className='py-4' alt='logo' height={50} width={50} />
        <Button onClick={() => router.push('/customer/login')} variant={'outline'} className='w-80'>Customer Login</Button>
        <Button onClick={() => router.push('/outlet/login')} variant={'outline'} className='w-80'>Outlet Login</Button>
      </div>
    </div>
  )
}

export default page
