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
  name: 'Bringing Engineering Excellence Improving Power Grid Reliability',
  para: [
    'SANPEC is proud to attend the “Transmission & Substation Design & Operation Symposium (TSDOS)” hosted by The University of Texas at Arlington.',
  ],
  author: 'Sangita Mallick',

  description:
    'The SunZia Transmission Project is a major new 500 kilovolt (kV) transmission project that will provide additional transmission interconnections and transmission capacity between central New Mexico and central Arizona. SunZia will enable the development of renewable energy resources, notably wind energy resources, by creating access to the interstate power grid across the Desert Southwest.',
  imageSrc:
    'https://cdn.firespring.com/images/7e800c2c-d790-484d-92c4-6eca38284d26.jpg',
  imageAlt:
    'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Blog2({ data }) {
  return (
    <BlogCommon feature={feature} />
   
  )
}
