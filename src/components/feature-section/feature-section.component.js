import { featureItems } from '../../stores/features';

import { FeatureContainer } from './feature-section.styles';

import { FeatureItem } from '../feature-item/feature-item';
import { HeadingComponent } from '../heading-component/heading.component';

export const FeatureSection = () => {
  return (
    <FeatureContainer>
      {/*Heading*/}
      <HeadingComponent
        heading="Features"
        paragraph="Our aim is to make it quick and easy for you to use our facial
          recognition feature to match faces."
      />
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
