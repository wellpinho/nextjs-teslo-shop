import { ProductsComponent, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <Title 
        title="Home page" 
        subtitle="subtitulo"
      />

      <ProductsComponent products={products} />
    </>
  );
}
