import React from 'react'
import { SideNavRow } from '@/components/SideNav/SideNavRow'
import Link from 'next/link'

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function SidebarLink({
  item,
  selected,
  setSelected,
  sidebarOpen,
  setSidebarOpen,
}) {
  const hasChildren = item.children && item.children.length > 0
  
  return (
    <li key={item.name}>
      {hasChildren ? (
        <SideNavRow
          classNames={classNames}
          selected={selected}
          setSelected={setSelected}
          item={item}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      ) : (
        <Link
          href={item.href}
          className={classNames(
            selected === item.name
              ? 'bg-gray-800 text-white'
              : 'text-gray-400 hover:bg-indigo-800 hover:text-white',
            'group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6'
          )}
          onClick={() => {
           
            setSelected(item.name)
            
        }}
        >
          <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
          {item.name}
        </Link>
      )}
    </li>
  )
}

export default SidebarLink
