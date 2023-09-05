import { ShoppingBag } from "./shoppingBag";
import { CartContainer, CartItems } from "./styles";

interface CartControlProps {
  items?: number;
}

export function CartControl({ items }: CartControlProps) {
  return (
    <CartContainer>
      <ShoppingBag />

      {items && <CartItems>{items}</CartItems>}
    </CartContainer>
  );
}
