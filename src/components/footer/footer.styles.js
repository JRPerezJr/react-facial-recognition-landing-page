import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const StyledFooterComponent = styled.footer.attrs({
  className: 'bg-light-blue py-8',
})``;

export const StyledFooterContainer = styled.div.attrs({
  className: 'container flex flex-col md:flex-row items-center',
})``;

export const StyledFooterContentContainer = styled.div.attrs({
  className:
    'flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12',
})``;

export const StyledFooterUL = styled.ul.attrs({
  className: 'flex text-primary uppercase gap-12 text-xs',
})``;

export const StyledFooterLI = styled.li.attrs({
  className: 'cursor-pointer',
})``;

export const StyledFooterSocialMediaIconContainer = styled.div.attrs({
  className: 'flex gap-10 mt-12 md:mt-0',
})``;

export const StyledSocialMediaListComponent = styled.li.attrs({
  className: 'list-none',
})``;

export const TwitterIcon = styled(FontAwesomeIcon).attrs({
  className: 'text-primary text-2xl',
  icon: faTwitter,
})``;

export const FacebookIcon = styled(FontAwesomeIcon).attrs({
  className: 'text-primary text-2xl',
  icon: faFacebookSquare,
})``;
