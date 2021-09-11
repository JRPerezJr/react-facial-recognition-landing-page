import styled from 'styled-components';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SpanContainer = styled.div.attrs({
  className: 'flex items-center border-b py-4',
})``;

export const StyledSpan = styled.span.attrs({
  className: 'flex-1',
})``;
export const StyledDropdownSpan = styled.span.attrs({
  className: 'flex-1 text-grey',
})``;

export const StyledIcon = styled(FontAwesomeIcon).attrs({
  className: 'text-purple',
  icon: faChevronDown,
})``;
