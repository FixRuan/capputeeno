import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "../productCard";
import { ProductListContainer } from "./styles";

export function ProductsList() {
  const { data } = useProducts();

  return (
    <ProductListContainer>
      {data?.map(product =>
        <ProductCard
          key={product.id}
          title={product.name}
          image={product.image_url}
          price={product.price_in_cents}
        />
      )}
    </ProductListContainer>
  );
}
