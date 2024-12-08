import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import LineDecoration from "./LineDecoration";


export function Hero() {
    return (
        <section className="pt-[12.8rem] pb-44">
            <div className="max-w-standard mx-auto px-6">
                <div className="flex flex-col items-center justify-start gap-48">
                    <div className="flex flex-col text-center justify-start items-center max-w-[66.4rem] mx-auto">
                        <h1 className="font-normal tracking-[-0.0416em] text-4xl lg:text-[4.8rem] leading-[1.126]">
                            Seamless cross-border payment solution for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f60] to-[#f00ab3]">everyone</span>
                        </h1>
                        <div className="mt-8 flex flex-col gap-3">
                            <div className="relative">
                                <LineDecoration />
                                <div>
                                    <Link href="/" title="Get Started" className="bg-foreground text-secondary inline-flex gap-2.5 flex-row items-center cursor-pointer text-base leading-6 duration-[0.15s] ease-[ease-in-out] shadow-[rgba(0,0,0,0.11)_0px_0px_20px] pt-[15px] px-6 py-3.5 rounded-none">
                                        <span>Join the waitlist</span>
                                        <ArrowRightIcon strokeWidth={1} />
                                    </Link>
                                </div>
                            </div>
                            <p className="text-xs">Currently in development</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}