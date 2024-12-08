export function HowItWorks() {
    return (
        <section className="w-full py-36">
            <div className="max-w-standard mx-auto px-6">
                <div className="flex flex-col max-w-md">
                    <div className="mt-10 md:mt-0">
                        <h3 className="tracking-[-0.01em] text-3xl text-pretty mt-3 text-primary">NxtGen Payment Solution</h3>
                        <div className="text-pretty mt-3 pr-5">
                            <p className="mb-2 text-primary">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officiis optio necessitatibus totam error amet corporis harum voluptates molestiae iure!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-6 mt-6">
                    {features.map((item) =>
                        <div key={item.id} className={`border border-secondary col-span-12 rounded-2xl ${item.size}`}>
                            <div className="flex flex-col">
                                <div className="flex z-10 w-full justify-start shrink-0 subpixel-antialiased flex-col items-start p-8">
                                    <p className="text-xs uppercase text-accentRed">{item.tag}</p>
                                    <h4 className="text-lg">{item.title}</h4>
                                    <p className="pt-2 text-sm font-light">{item.desciption}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

const features = [
    {
        id: 1,
        tag: "payment",
        title: "Mobile Wallet that works",
        desciption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officiis optio necessitatibus.",
        size: "sm:col-span-5"
    },
    {
        id: 2,
        tag: "wallet",
        title: "Send & Receive Money",
        desciption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officiis optio necessitatibus.",
        size: "sm:col-span-7"
    },
    {
        id: 3,
        tag: "credit",
        title: "Mobile Wallet that works",
        desciption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officiis optio necessitatibus",
        size: "sm:col-span-7"
    },
    {
        id: 4,
        tag: "analytics",
        title: "360' view of your data",
        desciption: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto officiis optio necessitatibus.",
        size: "sm:col-span-5"
    },
]