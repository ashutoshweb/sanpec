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
      { id: 2, name: 'Design and Engineering', href: '#', current: true },
      { id: 3, name: 'Asset Management', href: '#', current: false },
      { id: 5, name: 'Tower Testing', href: '#', current: false },
      { id: 6, name: 'Material Take-off', href: '#', current: false },
      { id: 7, name: 'Drafting and Detailing', href: '#', current: false },
    ],
  },
  {
    id: 8,
    name: 'Manufacturing and Operations',
    href: '#',
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
      { id: 17, name: 'Logistic support', href: '#', current: false },
      { id: 18, name: 'Yard Management', href: '#', current: false },
    ],
  },
  {
    id: 11,
    name: 'Constructability Review',
    href: '#info',
    icon: CalendarIcon,
    current: false ,
    children: [
      { id: 161, name: 'IFC Package', href: '#', current: false },
      { id: 171, name: 'Construction Support', href: '#', current: false },
    ],
  },
  {
    id: 12,
    name: 'Dynamic Risk Management',
    href: '#core',
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    id: 13,
    name: 'Business And System Excellence',
    href: '#social',
    icon: ChartPieIcon,
    current: false,
    children: [
      { id: 162, name: 'Business Excellence  ', href: '#', current: false },
    ]
  },
  { id: 14,
    name: 'Renewables',
    href: '#contact',
    icon: ChartPieIcon,
    current: false,
    children: [
      { id: 163, name: 'Hydrogen', href: '#', current: false },
      { id: 163, name: 'Wind And Solar', href: '#', current: false },
      { id: 163, name: 'Smart Grid', href: '#', current: false },
    ]

  },
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


