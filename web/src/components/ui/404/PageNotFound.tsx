import { titleMontSerrat } from "@/config/fonts"
import { Rewind } from "@phosphor-icons/react/dist/ssr"
import Image from "next/image"
import Link from "next/link"
import { TopMenu } from "../top-menu"

export const PageNotFound = () => {
    return (
        <>
            <TopMenu />
            <div className="
                flex
                flex-col-reverse
                md:flex-row
                h-[800px]
                w-full
                justify-center
                items-center
                align-middle
            ">
                <div className="
                    text-center
                    px-5
                    mx-5
                ">
                    <h2 className={`${titleMontSerrat.className} antialiased text-9xl`}>
                        404
                    </h2>
                    <p className="text-xl">
                        Whoops! Page not found.
                    </p>
                    <Link 
                        href="/shop" 
                        className="font-normal hover:underline transition-all flex items-center justify-center">
                            <Rewind className="text-xl" />
                            Home
                    </Link>
                </div>

                <div className="px-5 mx-5">
                    <Image 
                        src="/imgs/starman_750x750.png" 
                        className="" 
                        alt="Starman" 
                        width={550}
                        height={550}
                    />
                </div>
            </div>
        </>
    )
} 