import Image from "next/image"

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
const feature = 

  {
    name: 'The SunZia Transmission Project, NEW MEXICO ANDdcsddddd ARIZONA, USA',
    para :['Plan now to attend Carbon, Capture, Utilization, and Storage (CCUS) 25–27 April 2023 at the University of Houston in Houston, Texas. ',
     'Subsurface Geologic Storage',
    'CO₂ Enhanced Hydrocarbon Recovery',
  'Reservoir Monitoring and Risk Assessment',
'Case Studies',
'Industry Applications',
'Economics, Incentives, and Policy',

'Infrastructure',],










    description:
      'The SunZia Transmission Project is a major new 500 kilovolt (kV) transmission project that will provide additional transmission interconnections and transmission capacity between central New Mexico and central Arizona. SunZia will enable the development of renewable energy resources, notably wind energy resources, by creating access to the interstate power grid across the Desert Southwest.',
    imageSrc: 'https://cdn.firespring.com/images/e201f783-8186-41d8-964e-5fdfad397819.jpg',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  }
   
  
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Datatheme({data}) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Innovating for Sustainability</h2>
            <p className="mt-4 text-xl text-gray-900">
                Sangita P. Mallik
            </p>
          </div>
  
          <div className="mt-16 space-y-16">
           
             <div className="mx-auto max-w-3xl text-center">
             <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center w-full aspect-[9/5] xl:rounded-3xl " />
           </div>
            
          </div>

          <div className="mx-auto max-w-3xl ">

          {feature.para.map((content, index) => (
                            <p key={index} className="mt-4 text-xl font-semibold text-center text-gray-900">
                              {content}
                            </p>
                          ))}
            
          </div>
        </div>
      </div>
    )
  }
  