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
    name: 'The Journey',
    href: '#',
    icon: HomeIcon,
    current: true,
    children: [
      { id: 2, name: 'Engineering', href: '#', current: true },
      { id: 3, name: 'Human Resources', href: '#', current: false },
      { id: 4, name: 'Customer Success', href: '#', current: false },
    ],
  },
  {
    id: 5,
    name: 'The Business',
    href: '#business',
    icon: UsersIcon,
    current: false,
    children: [
      { id: 6, name: 'GraphQL API', href: '#', current: false },
      { id: 7, name: 'iOS App', href: '#', current: false },
      { id: 8, name: 'Android App', href: '#', current: false },
      { id: 9, name: 'New Customer Portal', href: '#', current: false },
    ],
  },
  { id: 10, name: 'Vision & Mission', href: '#vision', icon: FolderIcon, current: false },
  { id: 11, name: 'The Sanpec Edge', href: '#info', icon: CalendarIcon, current: false },
  { id: 12, name: 'Core Values', href: '#core', icon: DocumentDuplicateIcon, current: false },
  { id: 13, name: 'Social Impact', href: '#social', icon: ChartPieIcon, current: false },
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


