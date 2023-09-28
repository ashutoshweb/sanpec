import Image from 'next/image'
import BlogCommon from '@/components/common/BlogCommon'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const feature = {
  name: 'Risk Mitigation Planning in Transmission Line Project',
  para: [
    'In this age of increasing dependence on reliable power to support our economic development, new high-voltage electrical transmission lines are continually required to transport electricity long distances. As a result, many utilities and merchant developers are looking towards cost-effective EPC business models to meet the transmission infrastructure demands. During engineering, selecting transmission line structures, materials, and foundation types presents many challenges due to electrical system studies, environmental conditions, and constructability and maintenance considerations. In addition, the EPC model requires the contractor to be responsible for ensuring all industry and material standards are adhered to in their work scope. This requires developing robust ITPs (Inspection Test Plans) and source inspection plans to ensure quality and complete products are delivered on time.',
  'This paper will present a case study of a recent successful EPC project for the Alberta Power Line 500kV West Fort McMurray Transmission Project (WFMAC). The WFMAC project was a competitively bid 500 km of 500kV transmission line between Edmonton, Alberta, and Fort McMurray, Alberta. The project included routing, siting, permitting, design, procurement, construction, and operation for 35 years by one EPC contractor.',
  '#sanpec #sustainableenergy #powergridreliability #socioeconomicimpact #transmissionlinenegineering #energyinfrastructure #engineeringexcellence #riskmitigation'
  ],
  author: 'Sangita Mallick',

  description:
    'The SunZia Transmission Project is a major new 500 kilovolt (kV) transmission project that will provide additional transmission interconnections and transmission capacity between central New Mexico and central Arizona. SunZia will enable the development of renewable energy resources, notably wind energy resources, by creating access to the interstate power grid across the Desert Southwest.',
  imageSrc:
    'https://cdn.firespring.com/images/d2248298-dea9-4e55-a3de-1af4194eb763.png',
  imageAlt:
    'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Blog4({ data }) {
  return (
    <BlogCommon feature={feature} />
   
  )
}
