import Link from "next/link";
import Image from "next/image";

const nav = [
    { id: 1, title: "Home", href: "/" },
    { id: 2, title: "Personal", href: "/" },
    { id: 3, title: "Business", href: "/" },
]

export default function NavBar() {
    return (
        <header className="sticky mt-4 top-4 z-50 px-2 md:px-4 flex items-center justify-between whitespace-nowrap">
            <div className="bg-white bg-opacity-70 h-12 max-w-xl w-full mx-auto flex items-center justify-between px-4 backdrop-filter backdrop-blur-xl border border-border z-20 rounded-2xl">
                <Link href="/" title="logo" className="flex items-center gap-1">
                    <Image
                        alt="Logo image"
                        src="/static/logo.png"
                        width={18}
                        height={18}
                        sizes="100vw"
                        className="align-middle max-w-full object-cover"
                    />
                    <span className="font-medium text-foreground">Pay</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-2 text-sm mx-3">
                    {nav.map((item) =>
                        <Link key={item.id} href={item.href} title="Home" className="h-8 items-center justify-center p-2 inline-flex text-primary transition-opacity hover:text-foreground hover:opacity-70 duration-200">
                            {item.title}
                        </Link>
                    )}
                </nav>
                <Link href="/" title="Get Started" className="flex items-center text-sm pr-2 border-l-[1px] border-border pl-4">
                    Get Started
                </Link>
            </div>
        </header>
    )
}