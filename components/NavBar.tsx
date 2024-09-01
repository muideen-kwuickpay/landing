import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
        <header className="fixed top-4 w-full mx-auto z-[70] px-4">
            <div className="relative bg-white rounded-xl max-w-[1080px] mx-auto p-2 pl-4 grid-cols-[1fr,auto] grid lg:grid-cols-[1fr,2fr,1fr] lg:grid-flow-col items-center border border-solid border-[rgba(0,0,0,0.08)] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <div className="hidden lg:grid grid-flow-col auto-cols-auto pl-6 gap-4 cursor-none">
                    <nav className="flex items-center gap-4">
                        <ul className="flex items-center gap-4 list-none m-0 p-0">
                            <li><Link href="/"><span>About Us</span></Link></li>
                        </ul>
                    </nav>
                </div>
                <Link href="/" className="font-semibold pl-2 mx-auto">
                    <Image
                        alt="Logo"
                        src="/static/KwuickPay.svg"
                        width={100}
                        height={40}
                        sizes="100vw"
                        className="h-auto align-middle max-w-full object-cover"
                    />
                </Link>
                <div className="grid justify-end">
                    <Link href="/" className="bg-primary hover:bg-bgHover text-white py-2 px-4 h-10 flex items-center justify-center rounded-lg shadow-[0_0_0_1px_transparent]">
                        Join Waitlist
                    </Link>
                </div>
            </div>
        </header>
    )
}