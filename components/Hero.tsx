import HeroImage from "./HeroImage"
import { BtnOutlined } from "./Buttons"


export default function Hero() {
    return (
        <section className="py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="max-w-xl">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-bgColor text-sm p-1 rounded-2xl border border-solid border-[rgba(0,0,0,0.08)] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                        <div className="bg-primary text-white mr-2.5 px-2 rounded-xl">
                            pre-alpha
                        </div>
                        <div className="pr-2">release soon</div>
                    </div>
                    <div className="flex flex-col gap-4 pt-1">
                        <h1 className="text-4xl lg:text-5xl/[52px] leading-none tracking-[-0.02em]">
                            Payment for Everyone.
                        </h1>
                        <h2 className="text-lg text-primaryGrey">
                            KwuickPay is a financial technology company that creates a seamless user experience using powerful SaaS technology to initiate transactions for individuals, small businesses, sellers, freelancers.
                        </h2>
                    </div>
                    <div className="mt-8 flex gap-3">
                        {BtnOutlined("/", "For Individual")}
                        {BtnOutlined("/", "For Companies")}
                    </div>
                </div>

                <div>
                    <HeroImage />
                </div>
            </div>
        </section>
    )
}