'use client'

import { Product } from "@/interfaces"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface IProductItem {
    product: Product
}

export const ProductItem = ({ product }: IProductItem) => {
    const [displayImage, setDisplayImage] = useState( product.images[0]);

    return (
        <div className="rounded-md overflow-hidden fade-in hover:text-blue-600">
            <Link href={`/product/${product.slug}` }>
                <Image 
                    src={`/products/${displayImage}`} 
                    alt={product.title}
                    className="w-full object-cover rounded"
                    width={500}
                    height={500}
                    onMouseEnter={() => setDisplayImage(product.images[1])}
                    onMouseLeave={() => setDisplayImage(product.images[0])}
                />

                <div className="p-4 flex flex-col">
                            {product.title}
                    <span className="font-bold"></span>
                </div>
            </Link>
        </div>
    )
}