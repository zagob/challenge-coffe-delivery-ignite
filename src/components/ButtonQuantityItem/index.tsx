import { Minus, Plus } from "phosphor-react";
import { BaseButtonControl, ContentButtonsQuantity } from "./styles";

interface ButtonQuantityItem {
  quantity: number;
  onMinusQuantityProductItem: () => void;
  onPlusQuantityProductItem: () => void;
}

export function ButtonQuantityItem({
  quantity,
  onMinusQuantityProductItem,
  onPlusQuantityProductItem,
}: ButtonQuantityItem) {
  return (
    <ContentButtonsQuantity>
      <BaseButtonControl
        disabled={quantity === 1}
        type="button"
        onClick={onMinusQuantityProductItem}
      >
        <Minus />
      </BaseButtonControl>
      <span>{quantity}</span>
      <BaseButtonControl type="button" onClick={onPlusQuantityProductItem}>
        <Plus />
      </BaseButtonControl>
    </ContentButtonsQuantity>
  );
}
