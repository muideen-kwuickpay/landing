import Link from "next/link";
import { ArrowRight } from "./Icons";

export const BtnOutlined = (href: string, label: string) => (
    <Link href={href} className="bg-transparent hover:bg-primary hover:text-white border border-solid border-primaryGrey py-2 px-4 h-10 inline-flex items-center justify-center gap-2 rounded-xl shadow-[0_0_0_1px_transparent]">
        <span>{label}</span>
        <ArrowRight />
    </Link>
)