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
    component: PeopleSustainable,
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
  
  

]
const bgColor="bg-gray-900";

const Sustainability = () => {
  return (
    <div>
      <Sidebar navigation={navigation} firstSelected={navigation[0].name} bgColor={bgColor}>
      
        
        
      </Sidebar>
    </div>
  )
}

export default Sustainability;


