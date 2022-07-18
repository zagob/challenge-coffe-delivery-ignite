import {
  ContentAddress,
  InfoAddress,
  InfoDelivery,
  InfoPayament,
  SectionInfo,
  SectionLeft,
  SuccessContainer,
} from "./styles";

import { useNavigate } from "react-router-dom";

import illustrationPng from "../../assets/Illustration.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface AddressProps {
  street: string;
  number: string;
  city: string;
  district: string;
  uf: string;
  payment: string;
}

export function Success() {
  const navigate = useNavigate();
  const [address, setAddress] = useState<AddressProps | null>(null);

  useEffect(() => {
    toast.success("Pedido feito com Sucesso!");
    localStorage.setItem("@coffeDelivery:cart", "[]");
    const getAddressStorage = localStorage.getItem("@coffeDelivery:address");

    if (getAddressStorage) {
      setAddress(JSON.parse(getAddressStorage));
      return;
    }
    navigate("/");
  }, []);

  return (
    <SuccessContainer>
      <Toaster />
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
                Entrega em{" "}
                <strong>
                  {address?.street}, {address?.number}
                </strong>
              </span>
              <span>
                {address?.district} - {address?.city}, {address?.uf}
              </span>
            </div>
          </InfoAddress>
          <InfoDelivery>
            <div>
              <Timer weight="fill" />
            </div>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </InfoDelivery>
          <InfoPayament>
            <div>
              <CurrencyDollar weight="fill" />
            </div>
            <div>
              <span>Pagamento na entrega</span>
              <strong>{address?.payment}</strong>
            </div>
          </InfoPayament>
        </ContentAddress>
      </SectionLeft>
      <img src={illustrationPng} alt="" />
    </SuccessContainer>
  );
}
