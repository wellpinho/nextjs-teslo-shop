import { Product } from "@/interfaces"
import { ProductItem } from "./product-item"

interface IProps {
    products: Product[]
}

export const ProductsComponent = ({ products }: IProps) => {
    return (
        <div className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            gap-10 
            mb-10
        ">
            { products.map(product => (
                <ProductItem key={product.slug} product={ product } />
            ))}
        </div>
    )
}