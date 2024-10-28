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
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import researchImage1 from '@/custom-images/TSDOS-2021.png'
import researchImage3 from '@/custom-images/ICSI-ASCE.png'
import researchImage12 from '@/custom-images/baldrige-framework_home.jpeg'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import Image from 'next/image'

const testimonials = [
    [
      {
        content:
          'Innovating for Sustainability',
          mainImage : researchImage3,
        author: {
          name: 'Sangita Mallik',
          role: '',
          image: avatarImage1,
        },
      },
      {
        content:
          'BRINGING ENGINEERING EXCELLENCE IMPROVING POWER GRID RELIABILITY',
          mainImage : researchImage1,
        author: {
          name: 'Sangita Mallik',
          role: '',
          image: avatarImage4,
        },
      },
    ],
    [
      {
        content:
          'LAYING THE FOUNDATION OF SUSTAINABILITY',
          mainImage : researchImage1,
        author: {
          name: 'Sangita Mallik',
          role: '',
          image: avatarImage5,
        },
      },
      
    ],
    
  ]

  function QuoteIcon(props) {
    return (
      <svg aria-hidden="true" width={105} height={78} {...props}>
        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
      </svg>
    )
  }

const product = {
  name: "WHY SOURCE INSPECTION IS CRITICAL FOR TRANSMISSION STRUCTURES",
  price: '$32',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  imageSrc: researchImage3,
  description:
    'The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.',
  imageAlt: "Back of women's Basic Tee in black.",
  colors: [
    { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
    { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: false },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    



<section
id="testimonials"
aria-label="What our customers are saying"
className="bg-gray-900 py-20 sm:py-32"
>
<Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden md:inline-block md:h-screen md:align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:items-center lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-7">
                      <Image src={product.imageSrc} alt={product.imageAlt} className="" />

                    </div>
                    <div className="sm:col-span-8 lg:col-span-5 ">
                      <h2 className="text-xl font-medium text-gray-900 ">{product.name}</h2>

                      <section aria-labelledby="information-heading" className="mt-1">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="font-medium text-gray-900">{product.price}</p>
                        <p className="text-sm text-gray-700">{product.description}</p>

                       
                       
                      </section>

                      <section aria-labelledby="options-heading" className="mt-8">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          

                          {/* Size picker */}
                          <div className="mt-8">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900">Size</h4>
                              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Size guide
                              </a>
                            </div>

                            
                          </div>

                         

                          <p className="absolute left-4 top-4 text-center sm:static sm:mt-8">
                            <a href={product.href} className="font-medium text-indigo-600 hover:text-indigo-500">
                              View full details
                            </a>
                          </p>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
<Container>
  <div className="mx-auto max-w-2xl md:text-center">
    <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
      Research And Innovation
    </h2>
    <p className="mt-4 text-lg tracking-tight text-gray-300">
      Our software is so simple that people can’t help but fall in love
      with it. 
    </p>

    
  </div>
  <ul
    role="list"
    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
  >
    {testimonials.map((column, columnIndex) => (
      <li key={columnIndex}>
        <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
          {column.map((testimonial, testimonialIndex) => (
            <li key={testimonialIndex}>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">
                  <Image
                      
                     
                      src={testimonial.mainImage}
                      onClick={()=> setOpen(true)}
                      alt=""
                      
                     
                    />
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      {testimonial.author.name}
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      {testimonial.author.role}
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <Image
                      className="h-14 w-14 object-cover"
                      src={testimonial.author.image}
                      onClick={()=> setOpen(true)}
                      alt=""
                      width={56}
                      height={56}
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
</Container>
</section>
  )
}
