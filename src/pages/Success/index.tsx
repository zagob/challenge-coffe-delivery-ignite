import {
  ContentAddress,
  InfoAddress,
  InfoDelivery,
  InfoPayament,
  SectionInfo,
  SectionLeft,
  SuccessContainer,
} from "./styles";

import illustrationPng from "../../assets/Illustration.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
  return (
    <SuccessContainer>
      <SectionLeft>
        <SectionInfo>
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </SectionInfo>
        <ContentAddress>
          <InfoAddress>
            <div>
              <MapPin weight="fill" />
            </div>
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </InfoAddress>
          <InfoDelivery>
            <div>
              <Timer weight="fill" />
            </div>
            <div>
              <span>
                Previsão de entrega
              </span>
              <strong>20 min - 30 min</strong>
            </div>
          </InfoDelivery>
          <InfoPayament>
            <div>
              <CurrencyDollar weight="fill" />
            </div>
            <div>
              <span>
                Pagamento na entrega
              </span>
              <strong>Cartão de Crédito</strong>
            </div>
          </InfoPayament>
        </ContentAddress>
      </SectionLeft>
      <img src={illustrationPng} alt="" />
    </SuccessContainer>
  );
}
