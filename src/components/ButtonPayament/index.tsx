import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonPayamentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
  title: string;
  active: boolean;
}

export function ButtonPayament({
  active,
  icon,
  title,
  ...rest
}: ButtonPayamentProps) {
  return (
    <ButtonContainer active={active} {...rest} type="button">
      {icon}
      {title}
    </ButtonContainer>
  );
}
