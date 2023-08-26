import { Sidebar } from "@/components/SideNav/Sidebar";
import {SparklesIcon} from "@heroicons/react/24/solid";
import ProjectsContent from "@/components/ProjectsContent";

const navigation = [
  {
    id: 1,
    name: 'WEST FORT MCMURRAY (WFMAC): 500KV PROJECT- ALBERTA CANADA',
    href: '#',
    component: ProjectsContent,
    icon: SparklesIcon,
    current: true,
  },
  {
    id: 8,
    name: 'SUNZIA: 500KV PROJECT HVAC- NEW MEXICO AND ARIZONA, USA',
    href: '#',
    icon: SparklesIcon,
    current: false,
  },
  {
    id: 11,
    name: 'EV 2020 TRANSMISSION LINE: 345KV- WYOMING USA',
    href: '#',
    icon: SparklesIcon,
    current: false,
  },

]

const Projects = () => {
  return (
    <div>
      <Sidebar navigation={navigation} >
        <ProjectsContent />
      </Sidebar>
    </div>
  )
}

export default Projects;


