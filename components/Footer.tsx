import Link from "next/link"

export default function Footer() {
    return (
        <footer className="py-16 bg-primary text-primaryLight text-sm">
            <div className="mx-auto max-w-standard px-4">
                <div className="flex justify-between">
                    <div className="inline-flex items-center">
                        <span className="text-xl font-medium">KwuickPay</span>
                    </div>
                    <div className="place-items-end">
                        Copyright © <span>{new Date().getFullYear()}</span>
                    </div>
                </div>
                <div className="h-full w-full lg:grid grid-cols-16 grid-rows-10">
                    <div className="row-start-2 row-[span_8_/_span_8] col-start-4 col-[span_14_/_span_14] border-y border-y-primaryLight">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12 py-8 px-4">
                            <div className="">
                                <h3 className="text-base font-medium">Company</h3>
                                <ul role="list" className="mt-4 space-y-2 text-hover-30">
                                    <li>
                                        <Link href="#" className="hover:text-white">Product</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-white">Features</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-white">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-white">Team</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="">
                                <h3 className="text-base font-medium">Support</h3>
                                <ul role="list" className="mt-4 space-y-2 text-hover-30">
                                    <li>
                                        <Link href="#" className="hover:text-white">Support Team</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-white">Partnership</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-white">Press Release</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-white">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-base font-medium">Legal</h3>
                                <ul role="list" className="mt-4 space-y-2 text-hover-30">
                                    <li>
                                        <Link href="#" className="hover:text-white">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}