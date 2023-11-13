import Image from 'next/image'
import image1 from '@/images/research/1.jpg'
import image2 from '@/images/research/2.jpg'
import image3 from '@/images/research/3.png'
import image4 from '@/images/research/4.png'
import image5 from '@/images/research/5.png'
import image6 from '@/images/research/6.png'
import image7 from '@/images/research/7.png'
import image8 from '@/images/research/8.png'


const researches = [{
    authors: 'Ajay Mallik, PE Clinton Char, PE',
    resource: 'Transmission & Substation Design & Operation Symposium',
    topic: 'WHY SOURCE INSPECTION IS CRITICAL FOR TRANSMISSION STRUCTURES',
    image: image1,

  },
  {
    authors: 'Ajay Mallik, PE Clinton Char, PE',
    resource: 'Transmission & Substation Design & Operation Symposium',
    topic: 'SILICON EFFECT COLOR TRANSFORMATION ON GALV. STEEL LATTICE TOWERS',
    image: image2,

  },
  {
    authors: 'Ajay Mallik, PE Clinton Char, PE',
    resource: 'Transmission & Substation Design & Operation Symposium',
    topic: 'CONSIDERATION OF SOCIO-ECONOMIC VALUES IN TRANSMISSION LINE ENGINEERING',
    image: image3,

  },
  {
    authors: 'Ajay Mallik, PE and Dashiel Corp',
    resource: 'Transmission & Substation Design & Operation Symposium',
    topic: 'RISK MITIGATION PLANNING IN SUCCESSFUL EPC PROJECT',
    image: image4,

  },
  {
    authors: 'Ajay Mallik, PE and Sangita Mallik, ENV SP',
    resource: 'AMERICAN SOCIETY OF CIVIL ENGINEERS',
    topic: 'SUSTAINABILITY APPROACH WITH RESILIENCY PLANNING IN TRANSMISSION LINE ENGINEERING',
    image: image5,

  },
  {
    authors: 'Ajay Mallik, PE Clinton Char, PE',
    resource: 'EDM',
    topic: 'SUSTAINABILITY APPROACH IN TRANSMISSION LINE ENGINEERING',
    image: image6,

  },
  {
    authors: 'Ajay Mallik, PE Clinton Char, PE',
    resource: 'EDM',
    topic: 'LESSON LEARNED ON THE CHOICE OF MATERIAL FOR LATTICE STEEL TRANSMISSION TOWER STRUCTURES',
    image: image7,

  },
  {
    authors: 'Ajay Mallik, PE Clinton Char, PE',
    resource: 'IEEE',
    topic: 'SILICON EFFECT COLOR TRANSFORMATION ON GALVANIZED STEEL LATTICE TOWERS',
    image: image8,
  },
]

const Research = () => {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-20 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-9">
          {researches.map(research => (
            <div className="group relative p-1">
              <div
                  className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image src={research.image}
                     alt={research.topic}
                     className="h-full w-full lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex">
                <div>
                  <h5 className="mtb-2 text-sm text-[#e8b44b] capitalize leading-4">{research.resource}</h5>
                  <h3 className="mt-3 text-md text-white normal-case">
                    {research.topic}
                  </h3>
                  <p className="mt-2 text-xs text-[#e8b44b] normal-case" >{research.authors}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Research
