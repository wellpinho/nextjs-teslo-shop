import { titleFont } from "@/config/fonts";
import { Basket, MagnifyingGlass, ShoppingBag } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function TopMenu () {
    return (
        <nav className="
            flex 
            px-5 
            justify-between
            items-center,
            w-full
        ">
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Store</span>
                    <span className={`${titleFont.className} antialiased font-bold`}>| Shop</span>
                </Link>
            </div>

            <div className="hidden sm:flex">
                <div className="
                    m-2
                    p-2
                    rounded-sm
                    transition-all
                    hover:bg-gray-100
                ">
                    <Link href="/shop/category/man">Man</Link>
                </div>

                <div className="
                    m-2
                    p-2
                    rounded-sm
                    transition-all
                    hover:bg-gray-100
                ">
                    <Link href="/shop/category/woman">Woman</Link>
                </div>

                <div className="
                    m-2
                    p-2
                    rounded-sm
                    transition-all
                    hover:bg-gray-100
                ">
                    <Link href="/shop/category/kids">Kids</Link>
                </div>
            </div>

            <div className="flex items-center">
                <Link href="/search" className="mx-2">
                    <MagnifyingGlass className="w-5 h-5" />
                </Link>

                <Link href="/cart" className="mx-2">
                    <div className="relative">
                        <span className="
                            absolute 
                            text-xs 
                            rounded-full 
                            px-1 
                            font-bold 
                            -top-2
                            -right-2
                            bg-green-700 
                            text-white
                        ">3</span>
                        <ShoppingBag className="w-5 h-5" />
                    </div>
                </Link>

                <button>
                    <div className="m-2 rounded-md transition-all hover:bg-gray-100">
                        Menu
                    </div>
                </button>
            </div>
        </nav>
    )
}