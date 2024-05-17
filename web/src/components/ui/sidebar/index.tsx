'use client'

import { CustomMenu } from "@/hooks"
import { MagnifyingGlass, SignIn, SignOut, TShirt, Ticket, User, UsersThree, X } from "@phosphor-icons/react/dist/ssr"
import clsx from "clsx"
import Link from "next/link"

export const Sidebar = () => {
    const isMenuOpen = CustomMenu( state => state.isSideMenuOpen );
    const closeMenu = CustomMenu( state => state.closeSideMenu );

    return (
        <div>
            { isMenuOpen  && (
                <div className="
                    fixed
                    top-0
                    w-screen
                    h-screen
                    z-10
                    bg-black
                    opacity-30
                " />
            )}

            { isMenuOpen && (
                <div onClick={() => closeMenu()}  className="
                    fade-in
                    fixed
                    top-0
                    left-0
                    w-screen
                    h-screen
                    z-10
                    backdrop-filter
                    backdrop-blur-sm
                " />
            )}
            
                <nav className={
                    clsx(`                        
                        fixed 
                        p-5 
                        right-0 
                        top-0 
                        w-[500px] 
                        h-screen
                        bg-white 
                        z-20 
                        shadow-2xl 
                        transform                    
                        transition-all
                        duration-300`,
                        { 'translate-x-full' : !isMenuOpen}
                    )
                }>
                    <X 
                        size={30}  
                        className="absolute top-5 right-5 cursor-pointer"
                        onClick={() => closeMenu()}
                    />

                    <div className="relative mt-14">
                        <MagnifyingGlass size={20} className="absolute top-2 left-2" />
                        <input 
                            type="text"
                            placeholder="Buscar" 
                            className="
                                w-full
                                bg-gray-50
                                rounded
                                pl-10
                                py-1
                                pr-10
                                border-b-2
                                text-xl
                                border-gray-200
                                focus:outline-none
                                focus:border-blue-500
                            " />
                    </div>

                    <Link href="/" className="link">
                        <User size={30} />
                        <span className="ml-3 text-xl">Perfil</span>
                    </Link>

                    <Link href="/" className="link">
                        <Ticket size={30} />
                        <span className="ml-3 text-xl">Ordens</span>
                    </Link>

                    <Link href="/" className="link">
                        <SignIn size={30} />
                        <span className="ml-3 text-xl">Login</span>
                    </Link>

                    <Link href="/" className="link">
                        <SignOut size={30} />
                        <span className="ml-3 text-xl">Logout</span>
                    </Link>

                    <div className="w-full h-px bg-gray-200 my-10" />
                    <Link href="/" className="link">
                        <TShirt size={30} />
                        <span className="ml-3 text-xl">Products</span>
                    </Link>

                    <Link href="/" className="link">
                        <Ticket size={30} />
                        <span className="ml-3 text-xl">Ordens</span>
                    </Link>

                    <Link href="/" className="link">
                        <UsersThree size={32} />
                        <span className="ml-3 text-xl">Users</span>
                    </Link>
                </nav>
        </div>
    )
}