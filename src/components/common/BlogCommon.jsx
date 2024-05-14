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


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BlogCommon( {feature} ) {
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
            {feature.name}
          </h2>
          <p className="mt-4 text-xl text-gray-900">{feature.author}</p>
        </div>

        <div className="mt-16 space-y-16">
          <div className="mx-auto max-w-3xl text-center">
            <img
              src={feature.imageSrc}
              alt={feature.imageAlt}
              className="aspect-[9/5] w-full object-cover object-center xl:rounded-3xl "
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl ">
          {feature.para.map((content, index) => (
            <p
              key={index}
              className="mt-4 text-center text-xl font-semibold text-gray-900"
            >
              {content}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
