import DEContent from "@/components/DEContent";
import MOContent from "@/components/MOContent";
import { Sidebar } from "@/components/SideNav/Sidebar";
import Community from "@/components/changemanagement/Community";
import Consulting from "@/components/changemanagement/Consulting";
import Leadership from "@/components/changemanagement/Leadership";
import Research from "@/components/changemanagement/Reseearch";
import Resources from "@/components/changemanagement/Resources";
import Solutions from "@/components/changemanagement/Solutions";
import Training from "@/components/changemanagement/Training";
import ComingSoon from "@/components/common/ComingSoon";
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
    name: 'Change Management',
    href: '#',
    icon: HomeIcon,
    current: true,
    children: [
      { id: 2, name: 'Research and Best Practices', href: '#', current: true, component: ComingSoon, },
      { id: 3, name: 'Training and Certification', href: '#', current: false, component: ComingSoon },
      { id: 4, name: 'Tools and Resources', href: '#', current: false, component: ComingSoon },
      { id: 5, name: 'Consulting Services', href: '#', current: false, component: ComingSoon },
      { id: 6, name: 'Community and Events', href: '#', current: false, component: ComingSoon },
      { id: 7, name: 'Custom Solutions', href: '#', current: false, component: ComingSoon },
      { id: 8, name: 'Thought Leadership', href: '#', current: false, component: ComingSoon },
    ],
  },
  {
    id: 9,
    name: 'Disaster Recovery',
    href: '#',
    icon: UsersIcon,
    current: false,
    children: [
      { id: 10, name: 'Certification and Training', href: '#', current: false, component: ComingSoon, },
      { id: 11, name: 'Professional Development', href: '#', current: false, component: ComingSoon },
      { id: 12, name: 'Standards and Best Practices', href: '#', current: false, component: ComingSoon },
      { id: 13, name: 'Research and Publications', href: '#', current: false, component: ComingSoon },
      { id: 14, name: 'Events and Conferences', href: '#', current: false, component: ComingSoon },
      { id: 15, name: 'Consulting ', href: '#', current: false, component: ComingSoon },
      { id: 16, name: 'Advocacy and Community', href: '#', current: false, component: ComingSoon },
      
    ],
  },
  
]

const ChangeMan = () => {
  return (
    <div>
      <Sidebar navigation={navigation} firstSelected={navigation[0]?.children[0]?.name}>
      </Sidebar>
    </div>
  )
}

export default ChangeMan;


