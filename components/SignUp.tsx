export default function SignUp() {
    return (
        <section className="py-28 px-4">
            <div className="grid grid-cols-1 justify-items-center items-center text-center">
                <h2 className="text-4xl lg:text-5xl/[52px] leading-none tracking-[-0.02em]">Request Early Access</h2>
                <div className="max-w-2xl my-12 flex w-full items-center rounded-xl p-0 border border-solid border-[rgba(0,0,0,0.08)] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-gray-10/20 md:mb-0 md:p-1">
                    <form className="relative flex w-full items-center">
                        <input className="w-full bg-transparent px-3 py-3 pl-6 outline-none placeholder:text-bgHover" placeholder="Your email" />
                        <button type="submit" className="hidden whitespace-nowrap rounded-xl bg-gray-10 px-5 py-3 font-normal text-white hover:cursor-pointer bg-primary hover:bg-bgHover hover:px-7 md:flex duration-100">
                            Join Waitlist
                        </button>
                        <p className="pointer-events-none absolute right-[148px] top-2.5 hidden text-gray-10/60 duration-100 peer-hover:opacity-0 md:flex">
                            Press Enter</p>
                        <button type="submit" className="absolute left-0 top-12 mt-6 flex w-full justify-center whitespace-nowrap rounded-xl px-6 py-4 text-center font-medium text-white bg-primary hover:bg-bgHover md:hidden duration-100">
                            Join Waitlist
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}