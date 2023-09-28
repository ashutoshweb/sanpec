import { Sidebar } from '@/components/SideNav/Sidebar'
import { SparklesIcon } from '@heroicons/react/24/solid'
import ResearchContent from '@/components/ResearchContent'

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
const bgColor = 'bg-gray-900'
const Research = () => {
 
   





  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
        <iframe
            src="https://www.sanpec.com/research-and-innovation.html"
            width="1040"
            height="1040"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div className="mt-16 space-y-16">
          
        </div>
      </div>
    </div>
  )
}

export default Research
