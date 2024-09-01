export default function HowItWorks() {
    return (
        <section className="py-32">
            <div className="grid grid-cols-1 justify-items-center items-center text-center">
                <h2 className="text-4xl lg:text-5xl/[52px] leading-none tracking-[-0.02em]">How it works</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
                {HowItWork("Step 1: Create an account", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, harum! Commodi laboriosam, enim soluta nam ipsa eveniet excepturi ipsum inventore.")}

                {HowItWork("Step 2: Send money", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, harum! Commodi laboriosam, enim soluta nam ipsa eveniet excepturi ipsum inventore.")}

                {HowItWork("Step 3: Receive payment", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, harum! Commodi laboriosam, enim soluta nam ipsa eveniet excepturi ipsum inventore.")}
            </div>
        </section>
    )
}

const HowItWork = (header: string, description: string) => (
    <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center shrink-0 grow-0 rounded-full bg-primary text-primaryLight p-3 w-11 h-11">
                <span>/</span>
            </div>
            <h3 className="font-medium text-2xl">{header}</h3>
        </div>
        <p className="text-primaryGrey">{description}</p>
    </div>
)