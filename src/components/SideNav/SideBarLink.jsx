import React from "react";
import { SideNavRow } from '@/components/SideNav/SideNavRow';

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export function SidebarLink({ item, selected, setSelected }) {
    const hasChildren = item.children && item.children.length > 0;

    return (
        <li key={item.name}>
            {hasChildren ? (
                <SideNavRow classNames={classNames} selected={selected} setSelected={setSelected}  item={item}/>
            ) : (
                <a
                    href={item.href}
                    className={classNames(
                        selected === item.name ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                        'flex items-center w-full text-left group gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                    onClick={() => setSelected(item.name)}
                >
                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    {item.name}
                </a>
            )}
        </li>
    );
}

export default SidebarLink;
