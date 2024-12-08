import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-6 text-primary text-sm">
            <div className="mx-auto max-w-standard px-6">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="pb-6">
                        <Link href="/" title="logo" className="flex items-center gap-1">
                            <Image
                                alt="Logo image"
                                src="/static/logo.png"
                                width={24}
                                height={24}
                                sizes="100vw"
                                className="max-w-full object-cover"
                            />
                            <span className="font-medium text-foreground">PawpawPay</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <h3 className="font-medium">Company</h3>
                            <ul role="list" className="mt-4 space-y-2 text-hover-30">
                                <li>
                                    <Link href="#" className="hover:text-accentOneB">Product</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-accentOneB">Personal</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-accentOneB">Business</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-accentOneB">About Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="font-medium">Support</h3>
                            <ul role="list" className="mt-4 space-y-2 text-hover-30">
                                <li>
                                    <Link href="#" className="hover:text-accentOneB">Support Team</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-accentOneB">Partnership</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-accentOneB">Press Release</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-accentOneB">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium">Legal</h3>
                            <ul role="list" className="mt-4 space-y-2 text-hover-30">
                                <li>
                                    <Link href="#" className="hover:text-accentOneB">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-accentOneB">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"></hr>
                <div className="flex items-center justify-between">
                    <div className="sm:text-center">
                        <span>© 2023</span> {" "}
                        <Link className="inline-flex items-center outline-none text-sm text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity hover:underline" role="link" href="/">
                            PawpawPay
                        </Link>
                        <span>. All Rights Reserved.</span>
                    </div>
                    <div className="inline-flex gap-4">
                        <LinkedinIcon strokeWidth={1} size={18} />
                        <TwitterIcon strokeWidth={1} size={18} />
                        <FacebookIcon strokeWidth={1} size={18} />
                    </div>
                </div>
            </div>
        </footer>
    )
}