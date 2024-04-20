import React from 'react'
import { Header } from './OutletHeader'
import { useEffect } from 'react'
import { Drawer, DrawerContent } from '@/components/ui/drawer'

import {
  IconCalendarMonth,
  IconHome,
  IconListCheck,
  IconListDetails,
  IconUser,
} from '@tabler/icons-react'


const links = [
  {
    label: 'Inventory',
    icon: <IconListDetails size={'1.2rem'} stroke={1.75} />,
    href: '/outlet/inventory',
    activeLink: '/outlet/inventory',
  },
  {
    label: 'Orders',
    icon: <IconCalendarMonth size={'1.2rem'} stroke={1.75} />,
    href: '/outlet/orders',
    activeLink: '/outlet/orders',
  },
  {
    label: 'add form',
    icon: <IconListCheck size={'1.2rem'} stroke={1.75} />,
    href: '/outlet/add-item',
    activeLink: '/outlet/add-item',
  },
]


import { NavbarLinks } from './NavbarLinks'

const OutletLayout = ({

  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <Drawer>
        <Header />
        {/* Mobile Navbar */}
        <DrawerContent>
          <div className="h-full w-full py-4">
            <NavbarLinks navigationLinks={links} />
          </div>
        </DrawerContent>
        {/* Desktop Navbar */}
        <div className="fixed bottom-0 left-0 top-14 z-10 hidden w-64 border-r border-gray-200 bg-white p-2 md:block">
          <NavbarLinks navigationLinks={links} />
        </div>
        {/* Main Content */}
        <div className="z-0 m-0 mt-14 h-screen overflow-scroll bg-gray-50 pb-10 md:ml-64">
          {children}
        </div>
      </Drawer>
    </div>

  )
}

export default OutletLayout
