import { StyledDownloadSection } from './download.styles';

import { CardComponent } from '../card-component/card.component';
import { HeadingComponent } from '../heading-component/heading.component';

export const DownloadComponent = () => {
  return (
    <StyledDownloadSection>
      {/*Heading*/}
      <HeadingComponent
        heading="Download the application"
        paragraph="We've got more apps in the pipeline. Please let us know if you're
          interested in adding more new and exciting features."
      />
      {/*Cards*/}
      <CardComponent />
    </StyledDownloadSection>
  );
};
