import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { IconMenu2 } from '@tabler/icons-react'
import { OutletDropdown } from './OutletDropdown';
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';

export function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 h-14 border-b border-gray-200 px-5 bg-white">
      <div className="flex h-full w-full items-center justify-between px-3 md:px-6">
        <div
          className="flex w-full items-center justify-start p-0  md:hidden"
        >
          <Button variant={'link'}>
            <IconMenu2 stroke={1.5} />
          </Button>
        </div>
        <div className="flex w-full items-center justify-center md:justify-start">
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
          <OutletDropdown />
        </div>
      </div>
    </div>
  )
}
