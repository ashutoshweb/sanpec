import { Sidebar } from "@/components/SideNav/Sidebar";
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
import Content from '@/components/Content'

const navigation = [
  {
    id: 1,
    name: 'Transmission and Distribution',
    href: '#',
    component: Content,
    icon: HomeIcon,
    current: true,
    children: [
      {
        id: 2, name: 'Design and Engineering', href: '#',
        component: 'name', current: true
      },
      {
        id: 3, name: 'Asset Management', href: '#',
        component: 'name', current: false
      },
      {
        id: 5, name: 'Tower Testing', href: '#',
        component: 'name', current: false
      },
      {
        id: 6, name: 'Material Take-off', href: '#',
        component: 'name', current: false
      },
      {
        id: 7, name: 'Drafting and Detailing', href: '#',
        component: 'name', current: false
      },
    ],
  },
  {
    id: 8,
    name: 'Manufacturing and Operations',
    href: '#',
    component: 'name',
    icon: UsersIcon,
    current: false,
    children: [
      { id: 6, name: 'Vendor Audit', href: '#', current: false },
      { id: 7, name: 'Source Inspection', href: '#', current: false },
      { id: 8, name: 'Quality Controls', href: '#', current: false },
      { id: 9, name: 'Lean Manufacturing', href: '#', current: false },
    ],
  },
  {
    id: 10,
    name: 'Strategic Project Management',
    href: '#',
    icon: FolderIcon,
    current: false,
    children: [
      { id: 16, name: ' Material Expeditors', href: '#', current: false },
      { id: 17, name: 'Source Inspection', href: '#', current: false },
      { id: 18, name: 'Quality Controls', href: '#', current: false },
    ],
  },
  { id: 11, name: 'The Sanpec Edge', href: '#info', icon: CalendarIcon, current: false, component: Content },
  { id: 12, name: 'Core Values', href: '#core', icon: DocumentDuplicateIcon, current: false },
  { id: 13, name: 'Social Impact', href: '#social', icon: ChartPieIcon, current: false, component: Content },
  { id: 14, name: 'Contact', href: '#contact', icon: ChartPieIcon, current: false },
]

const Power = () => {
  return (
    <div>
      <Sidebar navigation={navigation} >
        <Content />
      </Sidebar>
    </div>
  )
}

export default Power;


