import React, { useState } from 'react';

import {
  SpanContainer,
  StyledDropdownSpan,
  StyledIcon,
  StyledSpan,
} from './faq-items.styles';

export const FAQItemsComponent = ({
  faqItem: { spanContent, dropdownContent },
}) => {
  const [faqMenuExpanded, setFAQMenuExpanded] = useState(false);

  return (
    <>
      <SpanContainer>
        <StyledSpan>{spanContent}</StyledSpan>
        <StyledIcon onClick={() => setFAQMenuExpanded(!faqMenuExpanded)} />
      </SpanContainer>
      {faqMenuExpanded && (
        <SpanContainer>
          <StyledDropdownSpan>{dropdownContent}</StyledDropdownSpan>
        </SpanContainer>
      )}
    </>
  );
};
