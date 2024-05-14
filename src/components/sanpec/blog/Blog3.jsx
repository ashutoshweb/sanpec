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
  name: 'Laying The Foundation Of Sustainability',
  para: [
    'We aim to create a united power community and an ecosystem model based on knowledge about conscious living and connect with the broader stakeholder to develop improved and sustainable policies, regulations, research, engineering, manufacturing, and inspection to drive transformation at all levels and ensure power grid reliability.',
  ],
  author: 'Sangita Mallick',

  description:
    'The SunZia Transmission Project is a major new 500 kilovolt (kV) transmission project that will provide additional transmission interconnections and transmission capacity between central New Mexico and central Arizona. SunZia will enable the development of renewable energy resources, notably wind energy resources, by creating access to the interstate power grid across the Desert Southwest.',
  imageSrc:
    'https://cdn.firespring.com/images/0c9d1ee1-5a60-47a8-acf5-80617edd1d31.jpg',
  imageAlt:
    'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Blog3({ data }) {
  return (
    <BlogCommon feature={feature} />
   
  )
}
