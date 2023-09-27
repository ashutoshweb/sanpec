import { Sidebar } from "@/components/SideNav/Sidebar";
import {SparklesIcon} from "@heroicons/react/24/solid";
import ResearchContent from "@/components/ResearchContent";

const navigation = [
  {
    id: 1,
    name: 'Research and Innovation',
    href: '#',
    component: ResearchContent,
    icon: SparklesIcon,
    current: true,
  },

]
const bgColor='bg-gray-900'
const Research = () => {
  return (
    <div>
      <Sidebar navigation={navigation} bgColor={bgColor} >
        <ResearchContent />
      </Sidebar>
    </div>
  )
}

export default Research;


