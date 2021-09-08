import { StyledButton } from './button.component.styles';

export const ButtonComponent = ({ twClass, text }) => {
  return <StyledButton className={twClass}>{text}</StyledButton>;
};
