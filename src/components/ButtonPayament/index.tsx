import { ButtonContainer } from "./styles";

interface ButtonPayamentProps {
  icon: React.ReactElement;
  title: string;
}

export function ButtonPayament({ icon, title }: ButtonPayamentProps) {
  return (
    <ButtonContainer type="button">
      {icon}
      {title}
    </ButtonContainer>
  );
}
