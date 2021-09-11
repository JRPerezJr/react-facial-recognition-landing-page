import styled from 'styled-components';

export const ContactUsSection = styled.section.attrs({
  className: 'bg-purple text-primary py-20 md:px-0 px-4',
})``;

export const ContactUsContainer = styled.div.attrs({
  className: 'container',
})``;

export const ContactUsContentContainer = styled.div.attrs({
  className: 'sm:w-3/4  lg:w-1/3 mx-auto',
})``;

export const ContactUsParagraph = styled.p.attrs({
  className: 'font-light uppercase text-center mb-8',
})``;

export const ContactUsHeading = styled.h1.attrs({
  className: 'text-3xl text-center',
})``;

export const ContactUsInputContainer = styled.div.attrs({
  className: 'flex flex-col sm:flex-row gap-6 mt-8',
})``;

export const ContactUsInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Enter your email address',
  className: 'focus:outline-none flex-1 px-2 py-3 rounded-md text-secondary',
})``;
