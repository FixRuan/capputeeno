import { Card } from "./styles";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

export function ProductCard({ image, price, title }: ProductCardProps) {

  function convertPrice(valueInCents: number) {
    const valueInReal = valueInCents / 100;
    return valueInReal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  return (
    <Card>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <div></div>
        <p>{convertPrice(price)}</p>
      </div>

    </Card>
  );
}
