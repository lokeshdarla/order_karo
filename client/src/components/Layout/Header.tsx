import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { IconMenu2 } from '@tabler/icons-react'
import { UserDropdown } from '@/components/Layout/UserDropdown'
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';

export function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 h-14 border-b border-gray-200 px-5 bg-white">
      <div className="flex h-full w-full items-center justify-between px-3 md:px-6">

        <div className="flex w-full items-center justify-start">
          <Link href={'/'}>
            <Image
              height={36}
              width={36}
              src="/logo.svg"
              alt="SRM AP Logo"
            />
          </Link>

        </div>
        <div className="flex w-full items-center gap-8 justify-end">
          <div>
            <Link href={'/customer/cart'} className='flex items-center justify-center gap-2'>
              <IoCartOutline size={30} /> Cart
            </Link>

          </div>
          <UserDropdown />
        </div>
      </div>
    </div>
  )
}
