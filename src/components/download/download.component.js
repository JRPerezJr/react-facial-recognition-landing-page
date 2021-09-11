import { StyledDownloadSection } from './download.styles';
import {
  HeadingContainer,
  StyledHeading,
  StyledParagraph,
} from '../feature-section/feature-section.styles';
import { CardComponent } from '../card-component/card.component';

export const DownloadComponent = () => {
  return (
    <StyledDownloadSection>
      <HeadingContainer>
        <StyledHeading>Download the application</StyledHeading>
        <StyledParagraph>
          We've got more apps in the pipeline. Please let us know if you're
          interested in adding more new and exciting features.
        </StyledParagraph>
      </HeadingContainer>
      {/*Cards*/}
      <CardComponent />
    </StyledDownloadSection>
  );
};
