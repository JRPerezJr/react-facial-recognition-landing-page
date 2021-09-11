import React from 'react';
import {
  ContactUsContentContainer,
  ContactUsHeading,
  ContactUsInput,
  ContactUsInputContainer,
  ContactUsParagraph,
  ContactUsSection,
} from './contact-us.styles';
import { ContentContainer } from '../feature-item/feature-item.styles';
import { ButtonComponent } from '../button-component/button.component';

export const ContactUsComponent = () => {
  return (
    <ContactUsSection>
      {/*Contact Us*/}
      <ContentContainer>
        <ContactUsContentContainer>
          <ContactUsParagraph>35,000+ already joined</ContactUsParagraph>
          <ContactUsHeading>
            Stay up-to-date with what we're doing
          </ContactUsHeading>
          <ContactUsInputContainer>
            <ContactUsInput />
            <ButtonComponent
              twClass="btn bg-btn-red hover:bg-primary hover:text-secondary"
              text="Contact Us"
            />
          </ContactUsInputContainer>
        </ContactUsContentContainer>
      </ContentContainer>
    </ContactUsSection>
  );
};
