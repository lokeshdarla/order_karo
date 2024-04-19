'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
// import { useAuth } from '@/hooks/useAuth'
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';
import { FaCubesStacked } from "react-icons/fa6";

export const UserDropdown = () => {
  // const { user, logout } = useAuth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex w-full items-center justify-center md:justify-start">
          {false ? (
            <Image
              height={36}
              width={36}
              src={''}
              alt="User Photo"
              className="rounded-full"
            />
          ) : (
            <p className="rounded-full bg-[#378CE7] px-4 py-2 text-white">
              {/* {user?.displayName[0]} */}
              L
            </p>
          )}
          <div className="ml-2 hidden flex-col items-start md:flex">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              Lokesh Naga Sai Darla
            </p>
            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
              {/* {user?.emailAddress} */}
              lokeshnagasaidarla@gmail.com
            </p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href={'/orders'} className='flex text-base hover:bg-gray-50 p-2'>
          <FaCubesStacked className="mr-2 h-4 w-4" />
          <span>Orders</span>
        </Link>
        <DropdownMenuItem onClick={() => console.log("Hello world")}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
