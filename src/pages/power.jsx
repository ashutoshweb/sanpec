import DEContent from "@/components/DEContent";
import MOContent from "@/components/MOContent";
import { Sidebar } from "@/components/SideNav/Sidebar";
import ComingSoon from "@/components/common/ComingSoon";
import Transmission from "@/components/sanpec/power/Transmission";
import Testing from "@/components/sanpec/power/Testing";
import GridHardening from "@/components/sanpec/power/GridHardening";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  {
    id: 1,
    name: 'Transmission and Distribution',
    href: '/power',
    icon: false,
    current: true,
    component: Transmission,
    
    children: [
      { id: 2, name: 'Design and Engineering', href: '#', current: true, component: Transmission, },
      { id: 3, name: 'Hardening Grid', href: '#', current: false,component: GridHardening, },
      { id: 5, name: 'Tower Testing and Source Inspection', href: '#', current: false,component: Testing, },
      { id: 6, name: 'Material Take-off', href: '#', current: false,component: ComingSoon, },
      { id: 7, name: 'Drafting and Detailing', href: '#', current: false,component: ComingSoon, },
    ],
  },
  {
    id: 8,
    name: 'Manufacturing and Operations',
    href: '#',
    icon: UsersIcon,
    current: false,
    children: [
      { id: 8, name: 'Vendor Audit', href: '#', current: false, component: ComingSoon, },
      { id: 9, name: 'Source Inspection', href: '#', current: false,component: ComingSoon, },
      { id: 10, name: 'Quality Controls', href: '#', current: false,component: ComingSoon, },
      { id: 11, name: 'Lean Manufacturing', href: '#', current: false,component: ComingSoon, },
    ],
  },
  {
    id: 12,
    name: 'Strategic Project Management',
    href: '#',
    icon: FolderIcon,
    current: false,
    children: [
      { id: 13, name: ' Material Expeditors', href: '#', current: false,component: ComingSoon, },
      { id: 14, name: 'Logistic support', href: '#', current: false,component: ComingSoon, },
      { id: 15, name: 'Yard Management', href: '#', current: false,component: ComingSoon, },
    ],
  },
  {
    id: 16,
    name: 'Constructability Review',
    href: '#info',
    icon: CalendarIcon,
    current: false,
    children: [
      { id: 17, name: 'IFC Package', href: '#', current: false,component: ComingSoon, },
      { id: 18, name: 'Construction Support', href: '#', current: false ,component: ComingSoon,},
    ],
  },
  
  {
    id: 20,
    name: 'Business And System Excellence',
    href: '#social',
    icon: ChartPieIcon,
    current: false,
    children: [
      { id: 162, name: 'Business Excellence  ', href: '#', current: false,component: ComingSoon, },
    ]
  },
  {
    id: 21,
    name: 'Renewables',
    href: '#contact',
    icon: ChartPieIcon,
    current: false,
    children: [
      { id: 22, name: 'Hydrogen', href: '#', current: false,component: ComingSoon, },
      { id: 23, name: 'Wind And Solar', href: '#', current: false,component: ComingSoon, },
      { id: 24, name: 'Smart Grid', href: '#', current: false ,component: ComingSoon,},
    ]
  },
]

const Power = () => {
  return (
    <div>
      <Sidebar navigation={navigation} firstSelected={navigation[0].name}>
      </Sidebar>
    </div>
  )
}

export default Power;


