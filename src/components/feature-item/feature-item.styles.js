import styled from 'styled-components';

export const StyledFeature = styled.div.attrs({})``;

export const StyledFeatureContainer = styled.div.attrs({})``;

export const StyledImageContainer = styled.div.attrs({
  className: 'flex flex-1 justify-center z-10 mb-10 lg:mb-0',
})``;

export const StyledImage = styled.img.attrs({
  className: 'w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full',
})``;

export const ContentContainer = styled.div.attrs({
  className: 'flex flex-1 flex-col items-center lg:items-start',
})``;

export const StyledContentHeading = styled.h1.attrs({
  className: 'text-3xl text-light-blue',
})``;

export const StyledContentParagraph = styled.div.attrs({
  className: 'text-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full',
})``;
