const posts = [
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


    {
        id: 2,
        title: 'SANPEC founder receives the 2023 Malcolm Baldrige Award for Leadership Excellence',
        href: '#',
        description:
            'The Malcolm Baldrige Foundation Award for Leadership Excellence, the ONLY award for performance excellence granted by the President of the United States, named Sangita P. Mallik, EVP and co-founder at SANPEC, as a 2023 recipient.',
        imageUrl:
            'https://cdn.firespring.com/images/7cd1d000-f890-4912-ba72-7e8e9ec26d0a.jpg',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Ashutosh Das',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Happy Earth Week',
        href: '#',
        description:
            'The maturing carbon market is a major driver for deployment of carbon capture, utilization, and storage (CCUS) projects. CCUS has experienced growing interest over the past two decades, due to the desire to reduce CO₂ emissions and to make industrial sources more environmentally sustainable.',
        imageUrl:
            'https://cdn.firespring.com/images/4b4f2a7c-848e-41e1-9b74-5c2a9b41580a.png',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Amar',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
]

export default function Events() {
    return (
        <div id="events" className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[#151949] sm:text-4xl">Events</h2>
                    <p className="mt-2 text-lg leading-8 text-[#151949]">
                        Learn how to grow your business with our expert advice.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                            <div className="max-w-xl">
                                <div className="mt-8 flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-[#151949] hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-[#151949] group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-[#151949]">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-[#151949]">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-[#151949]">{post.author.role}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
