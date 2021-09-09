import { featureItems } from '../../stores/features';

import {
  FeatureContainer,
  HeadingContainer,
  StyledHeading,
  StyledParagraph,
} from './feature-section.styles';

import { FeatureItem } from '../feature-item/feature-item';

export const FeatureSection = () => {
  return (
    <FeatureContainer>
      {/*Heading*/}
      <HeadingContainer>
        <StyledHeading>Features</StyledHeading>
        <StyledParagraph>
          Our aim is to make it quick and easy for you to use our facial
          recognition feature to match faces.
        </StyledParagraph>
      </HeadingContainer>
      {/*Feature 1*/}
      {featureItems.map(featureItem => (
        <FeatureItem
          key={featureItem.id}
          styledFeatureClass={featureItem.styledFeatureClass}
          styledFeatureContainerClass={featureItem.styledFeatureContainerClass}
          featureImage={featureItem.featureImage}
          contentHeading={featureItem.contentHeading}
          contentParagraph={featureItem.contentParagraph}
          roundedRectangleClass={featureItem.roundedRectangleClass}
        />
      ))}
    </FeatureContainer>
  );
};
