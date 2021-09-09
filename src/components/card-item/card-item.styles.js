import styled from 'styled-components';

export const CardItemContainer = styled.div.attrs({
  className: 'flex flex-col rounded-md shadow-md',
})``;

export const CardItemContent = styled.div.attrs({
  className: 'p-6 flex flex-col items-center',
})``;

export const CardItemHeader = styled.h3.attrs({
  className: 'mt-5 mb-2 text-light-blue text-lg',
})``;

export const CardItemParagraph = styled.p.attrs({
  className: 'mb-2 text-grey font-light',
})``;

export const StyledHR = styled.hr.attrs({
  className: 'border-b border-primary',
})``;

export const CardItemButtonContainer = styled.div.attrs({
  className: 'flex p-6 lg:p-9',
})``;
