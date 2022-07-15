import { Trash } from "phosphor-react";
import { ButtonQuantityItem } from "../../../../components/ButtonQuantityItem";
import {
  ButtonRemove,
  ContentItem,
  CurrentCart,
  InfoItem,
  QuantityOrRemoveItem,
} from "./styles";

import expresso from "../../../../assets/expresso-americano.svg";
import { useContext } from "react";
import { CartContext } from "../../../../hooks/CartContext";
import { FormatCurrencyNumber } from "../../../../utils/formatCurrencyNumber";

interface ItensCart {
  id: number;
  idCart: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

export function ItensCart({
  id,
  idCart,
  image,
  price,
  quantity,
  title,
}: ItensCart) {
  const {
    onPlusQuantityProductCart,
    onMinusQuantityProductCart,
    onRemoveProductCart,
  } = useContext(CartContext);
  return (
    <ContentItem>
      <img src={image} alt="" width={64} />
      <InfoItem>
        <span>{title}</span>
        <QuantityOrRemoveItem>
          <ButtonQuantityItem
            onPlusQuantityProductItem={() => onPlusQuantityProductCart(idCart)}
            onMinusQuantityProductItem={() =>
              onMinusQuantityProductCart(idCart)
            }
            quantity={quantity}
          />
          <ButtonRemove
            type="button"
            onClick={() => onRemoveProductCart(idCart)}
          >
            <Trash size={16} />
            remover
          </ButtonRemove>
        </QuantityOrRemoveItem>
      </InfoItem>
      <CurrentCart>{FormatCurrencyNumber(price)}</CurrentCart>
    </ContentItem>
  );
}
