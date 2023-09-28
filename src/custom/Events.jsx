const blogs = [
    {
        id: 1,
        title: 'SANPEC, Inc. is Mac Baldrige Society’s newest member',
        href: '#',
        description:
            'The Malcolm Baldrige National Quality Award is presented annually by the United States President to organizations that demonstrate quality and performance excellence.',
        imageUrl:
            'https://cdn.firespring.com/images/72574c11-9ead-48fa-97ac-861336ae257e.jpg',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Jodie Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },


   
    
    // More posts...
]

export default function Events(posts={blogs}) {
    return (
        <div id="events" className="bg-white py-24 sm:py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                
                <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-1">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <img
                                    src={post.imageUrl}
                                    alt=""
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                            </div>
                           
                        </article>
                    ))}
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[#151949] sm:text-4xl">Events</h2>
                    <p className="mt-2 text-lg leading-8 text-[#151949]">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
            </div>
        </div>
    )
}
