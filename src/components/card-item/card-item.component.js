import Chrome from '../../assets/logo-chrome.svg';

import {
  CardItemButtonContainer,
  CardItemContainer,
  CardItemContent,
  CardItemHeader,
  CardItemParagraph,
  StyledHR,
} from './card-item.styles';
import { ButtonComponent } from '../button-component/button.component';

export const CardItemComponent = () => {
  return (
    <CardItemContainer>
      <CardItemContent>
        <img src={Chrome} alt="Chrome" />
        <CardItemHeader>Add to Chrome</CardItemHeader>
        <CardItemParagraph>Minimum version 62</CardItemParagraph>
      </CardItemContent>
      <StyledHR />
      <CardItemButtonContainer>
        <ButtonComponent
          twClass="btn btn-purple hover:bg-primary hover:text-secondary"
          text="Add & Install Extension"
        />
      </CardItemButtonContainer>
    </CardItemContainer>
  );
};
