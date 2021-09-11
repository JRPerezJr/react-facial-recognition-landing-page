import {
  HeadingContainer,
  StyledHeading,
  StyledParagraph,
} from './heading.styles';

export const HeadingComponent = props => {
  return (
    <>
      {/*Heading*/}
      <HeadingContainer>
        <StyledHeading>{props.heading}</StyledHeading>
        <StyledParagraph>{props.paragraph}</StyledParagraph>
      </HeadingContainer>
    </>
  );
};
