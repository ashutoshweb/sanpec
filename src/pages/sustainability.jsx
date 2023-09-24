import { Sidebar } from "@/components/SideNav/Sidebar";
import {
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import SanpecSustainability from "@/components/sanpec/SustainabilityContent";
import AdditionalFeature from "@/components/baldrige/features/Additional";
import PeopleSustainable from "@/components/sanpec/sustainability/People";
import EnvironmentSustainable from "@/components/sanpec/sustainability/Environment";

const navigation = [
  {
    id: 1,
    name: 'People',
    href: '#',
    component: SanpecSustainability,
    icon: HomeIcon,
    current: true,
  },
  {
    id: 2,
    name: 'Environment',
    href: '#',
    component: EnvironmentSustainable,
    icon: UsersIcon,
    current: false,
  },
  {
    id: 3,
    name: 'Decarbonization',
    href: '#',
    component: PeopleSustainable,
    icon: UsersIcon,
    current: false,
  },
  

]

const Sustainability = () => {
  return (
    <div>
      <Sidebar navigation={navigation} >
      
        
        
      </Sidebar>
    </div>
  )
}

export default Sustainability;


