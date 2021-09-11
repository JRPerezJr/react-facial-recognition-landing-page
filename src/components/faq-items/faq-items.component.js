import { SpanContainer, StyledIcon, StyledSpan } from './faq-items.styles';

export const FAQItemsComponent = ({ id, spanContent }) => {
  return (
    <SpanContainer key={id}>
      <StyledSpan>{spanContent}</StyledSpan>
      <StyledIcon />
    </SpanContainer>
  );
};
