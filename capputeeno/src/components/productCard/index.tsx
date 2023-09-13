import { Card } from "./styles";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

export function ProductCard({ image, price, title }: ProductCardProps) {
  return (
    <Card>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <div></div>
        <p>{price}</p>
      </div>

    </Card>
  );
}
