import Image from "next/image"

export default function HeroImage() {
    return (
        <div className="relative flex justify-center items-center max-w-heroW">
            {/* 1080 x 1230 // 524 × 597 // 1048 x 1194 */}
            {/* https://unsplash.com/photos/a-person-sitting-on-a-couch-with-a-laptop-X1GZqv-F7Tw */}
            <Image
                alt="Hero image"
                src="/static/hero.png"
                width={624}
                height={597}
                sizes="100vw"
                className="mt-5 rounded-2xl align-middle max-w-full object-cover"
            />
            <Image
                alt="balance"
                src="/static/amount.jpg"
                width={336}
                height={209}
                className="absolute align-middle top-auto -left-10 -bottom-10 rounded-2xl shadow-[-6px_6px_88px_0_rgb(0_0_0_/_6%)] hidden lg:block"
            // className="absolute align-middle top-auto -right-20 left-auto -bottom-10 rounded-2xl shadow-[-6px_6px_88px_0_rgb(0_0_0_/_6%)]"
            />
            <Image
                alt="balance"
                src="/static/payment.jpg"
                width={225}
                height={206}
                // className="absolute align-middle -top-4 right-auto -left-16 bottom-auto rounded-2xl shadow-[-6px_6px_88px_0_rgb(0_0_0_/_6%)] hidden lg:block"
                className="absolute align-middle top-0 -right-16 left-auto bottom-auto rounded-2xl shadow-[-6px_6px_88px_0_rgb(0_0_0_/_6%)] hidden lg:block"
            />
        </div>
    )
}