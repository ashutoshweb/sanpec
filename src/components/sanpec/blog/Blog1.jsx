import BlogCommon from '@/components/common/BlogCommon'
import Image from 'next/image'

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
  name: 'Innovating for Sustainability',
  author: 'Sangita P. Mallik',
  para: [
    'Plan now to attend Carbon, Capture, Utilization, and Storage (CCUS) 25–27 April 2023 at the University of Houston in Houston, Texas. ',
    'Subsurface Geologic Storage',
    'CO₂ Enhanced Hydrocarbon Recovery',
    'Reservoir Monitoring and Risk Assessment',
    'Case Studies',
    'Industry Applications',
    'Economics, Incentives, and Policy',

    'Infrastructure',
  ],

  description:
    'The SunZia Transmission Project is a major new 500 kilovolt (kV) transmission project that will provide additional transmission interconnections and transmission capacity between central New Mexico and central Arizona. SunZia will enable the development of renewable energy resources, notably wind energy resources, by creating access to the interstate power grid across the Desert Southwest.',
  imageSrc:
    'https://cdn.firespring.com/images/4b4f2a7c-848e-41e1-9b74-5c2a9b41580a.png',
  imageAlt:
    'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Blog1() {
  return (
    <BlogCommon feature={feature} />
   
  )
}
