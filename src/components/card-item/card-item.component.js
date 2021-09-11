import {
  CardItemButtonContainer,
  CardItemContainer,
  CardItemContent,
  CardItemHeader,
  CardItemParagraph,
  StyledHR,
} from './card-item.styles';

import { ButtonComponent } from '../button-component/button.component';

export const CardItemComponent = ({
  cardClass,
  key,
  img,
  header,
  paragraph,
  twClass,
  text,
}) => {
  return (
    <CardItemContainer key={key} className={cardClass}>
      <CardItemContent>
        <img src={img} alt="Chrome" />
        <CardItemHeader>{header}</CardItemHeader>
        <CardItemParagraph>{paragraph}</CardItemParagraph>
      </CardItemContent>
      <StyledHR />
      <CardItemButtonContainer>
        <ButtonComponent twClass={twClass} text={text} />
      </CardItemButtonContainer>
    </CardItemContainer>
  );
};
