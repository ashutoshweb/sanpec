import { Sidebar } from "@/components/SideNav/Sidebar";
import {
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import SustainabilityContent from '@/components/SustainabilityContent'

const navigation = [
  {
    id: 1,
    name: 'Carbon, Capture, Utilization, and Storage (CCUS)',
    href: '#',
    component: SustainabilityContent,
    icon: HomeIcon,
    current: true,
  },
  {
    id: 8,
    name: 'Holistic Risk Management',
    href: '#',
    icon: UsersIcon,
    current: false,
  },

]

const Sustainability = () => {
  return (
    <div>
      <Sidebar navigation={navigation} >
        <SustainabilityContent />
      </Sidebar>
    </div>
  )
}

export default Sustainability;


