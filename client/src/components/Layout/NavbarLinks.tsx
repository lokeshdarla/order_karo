'use client'
import { DrawerClose } from '@/components/ui/drawer'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavbarLinks = ({
  navigationLinks,
}: {
  navigationLinks: {
    label: string
    icon: JSX.Element
    href: string
    activeLink: string
  }[]
}) => {
  const pathname = usePathname()

  return (
    <div className="flex flex-1 flex-col items-center justify-start gap-2">
      {navigationLinks?.map((link) => (
        <DrawerClose asChild key={link.label}>
          <Link
            href={link.href}
            className={
              pathname.includes(link.activeLink)
                ? 'w-full rounded-md bg-blue-100/40 text-blue-600'
                : 'w-full rounded-md text-gray-600/90 hover:bg-blue-100/40 hover:text-blue-600'
            }
          >
            <div className="flex items-center justify-start gap-x-3 px-4 py-3">
              <span>{link.icon}</span>
              <span className="font-sans text-sm font-medium tracking-wide">
                {link.label}
              </span>
            </div>
          </Link>
        </DrawerClose>
      ))}
    </div>
  )
}
