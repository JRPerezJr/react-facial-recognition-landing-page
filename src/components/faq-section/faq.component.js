import React from 'react';
import { FAQContainer, StyledFAQSection } from './faq.styles';
import { HeadingComponent } from '../heading-component/heading.component';
import { FAQItemsComponent } from '../faq-items/faq-items.component';
import { faqItems } from '../../stores/faq-store';
import { ButtonComponent } from '../button-component/button.component';

export const FAQComponent = () => {
  return (
    <StyledFAQSection>
      {/*Heading*/}
      <HeadingComponent
        heading="Frequently Asked Questions"
        paragraph="Here are some of our FAQs. If you have any other questions you'd like to answered please feel free to ask"
      />
      {/*FAQ Items*/}
      <FAQContainer>
        {faqItems.map(faqItem => (
          <FAQItemsComponent key={faqItem.id} faqItem={faqItem} />
        ))}
        {/*Button*/}
        <ButtonComponent
          twClass="mt-12 flex self-center btn btn-purple text-primary hover:bg-primary hover:text-secondary"
          text="More Info"
        />
      </FAQContainer>
    </StyledFAQSection>
  );
};
