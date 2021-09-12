import {
  ContentContainer,
  StyledContentHeading,
  StyledContentParagraph,
  StyledFeature,
  StyledFeatureContainer,
  StyledImage,
  StyledImageContainer,
} from './feature-item.styles';
import { ButtonComponent } from '../button-component/button.component';
import { RoundedRectangleComponent } from '../rounded-rectangle/rounded-rectangle.component';

export const FeatureItem = ({
  featureItem: {
    contentHeading,
    contentParagraph,
    featureImage,
    roundedRectangleClass,
    styledFeatureClass,
    styledFeatureContainerClass,
  },
}) => {
  return (
    <StyledFeature className={styledFeatureClass}>
      <StyledFeatureContainer className={styledFeatureContainerClass}>
        {/*Image*/}
        <StyledImageContainer>
          <StyledImage src={featureImage} alt="Feature 1" />
        </StyledImageContainer>
        {/* Content*/}
        <ContentContainer>
          <StyledContentHeading>{contentHeading}</StyledContentHeading>
          <StyledContentParagraph>{contentParagraph}</StyledContentParagraph>
          <ButtonComponent
            twClass={
              'btn btn-purple text-primary hover:bg-primary hover:text-secondary'
            }
            text={'Get started now'}
          />
        </ContentContainer>
      </StyledFeatureContainer>
      {/*Rounded Rectangle*/}
      <RoundedRectangleComponent twClass={roundedRectangleClass} />
    </StyledFeature>
  );
};
