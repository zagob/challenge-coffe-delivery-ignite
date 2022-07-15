import { ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../hooks/CartContext";
import { ButtonCartContainer } from "./styles";

interface ButtonCart {
  id: number;
}

export function ButtonCart({ id }: ButtonCart) {
  const { onAddItemCart } = useContext(CartContext);
  return (
    <ButtonCartContainer type="button" onClick={() => onAddItemCart(id)}>
      <ShoppingCart weight="fill" />
    </ButtonCartContainer>
  );
}
