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
const features = [

  {
    name: 'The SunZia Transmission Project, NEW MEXICO AND ARIZONA, USA',
    description:
      'The SunZia Transmission Project is a major new 500 kilovolt (kV) transmission project that will provide additional transmission interconnections and transmission capacity between central New Mexico and central Arizona. SunZia will enable the development of renewable energy resources, notably wind energy resources, by creating access to the interstate power grid across the Desert Southwest.',
    imageSrc: 'https://cdn.firespring.com/images/e201f783-8186-41d8-964e-5fdfad397819.jpg',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
    {
      name: 'WFMAC, ALBERTA CANADA',
      description:
        'Fort McMurray West 500 kV Transmission Project -  Spanning 508 kilometres (km), the project is the longest 500 kilovolt (kV) AC transmission line in Canada.',
      imageSrc: 'https://cdn.firespring.com/images/847220d0-8ba0-4fb7-8d82-a64d13a3e897.jpg',
      imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    }, 
    {
      name: 'QUANTA/PACIFICORP- EPC PROJECT- WYOMING USA ',
      description:
        'This new transmission line delivers electricity to meet increasing customer needs in Idaho, Wyoming, Utah and other Western states, providing strength and reliability to the region’s transmission system.',
      imageSrc: 'https://cdn.firespring.com/images/39a20f82-a562-485e-ac17-d7e6bf77fefa.jpg',
      imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },

    {
      name: 'The SunZia Transmission Project, NEW MEXICO AND ARIZONA, USA',
      description:
        'The SunZia Transmission Project is a major new 500 kilovolt (kV) transmission project that will provide additional transmission interconnections and transmission capacity between central New Mexico and central Arizona. SunZia will enable the development of renewable energy resources, notably wind energy resources, by creating access to the interstate power grid across the Desert Southwest.',
      imageSrc: 'https://cdn.firespring.com/images/ec4186f7-f992-431d-afe5-4c6703a7d247.jpg',
      imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function SanpecProject() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">SANPEC Projects</h2>
            <p className="mt-4 text-xl text-gray-900">
            SANPEC actively contributed to the successful completion of various projects.
            Expertise and dedication of the compamny were instrumental in the achievement of project milestones.
            </p>
          </div>
  
          <div className="mt-16 space-y-16">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
                  )}
                >
                  <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-lg font-poppins text-gray-800">{feature.description}</p>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                    'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                  )}
                >
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 ">
                    <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center w-full aspect-[9/5] xl:rounded-3xl " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  