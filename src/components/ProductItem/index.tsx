import {
  About,
  CardHeader,
  ContentOptions,
  CurrentValue,
  Options,
  ProductItemContainer,
} from "./styles";

import expressoTradicional from "../../assets/expresso-tradicional.svg";
import { ButtonQuantityItem } from "../ButtonQuantityItem";
import { ButtonCart } from "../ButtonCart";
import { useContext } from "react";
import { CartContext } from "../../hooks/CartContext";
import { FormatCurrencyNumber } from "../../utils/formatCurrencyNumber";

interface ProductItemProps {
  id: number;
  image: string;
  options: string[];
  price: number;
  title: string;
  subtitle: string;
  quantity: number;
}

export function ProductItem({
  id,
  image,
  options,
  price,
  subtitle,
  title,
  quantity,
}: ProductItemProps) {
  const { onMinusQuantityProduct, onPlusQuantityProduct } =
    useContext(CartContext);
  return (
    <ProductItemContainer>
      <CardHeader>
        <img src={image} alt="" />
        <Options>
          {options.map((option) => (
            <span key={option}>{option}</span>
          ))}
        </Options>
      </CardHeader>
      <About>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </About>

      <ContentOptions>
        <CurrentValue>
          <strong>{FormatCurrencyNumber(price)}</strong>
        </CurrentValue>
        <ButtonQuantityItem
          onMinusQuantityProductItem={() => onMinusQuantityProduct(id)}
          onPlusQuantityProductItem={() => onPlusQuantityProduct(id)}
          quantity={quantity}
        />
        <ButtonCart id={id} />
      </ContentOptions>
    </ProductItemContainer>
  );
}
