import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

export const NavContainer = styled.nav.attrs({
  className: 'container flex items-center py-4 mt-4 sm:mt-12',
})``;

export const LogoContainer = styled(Link).attrs({
  to: '/',
})``;

export const OptionsContainer = styled.ul.attrs({
  className:
    'hidden sm:flex flex-1 justify-end items-center gap-12  uppercase text-xs',
})``;

export const OptionLink = styled(Link)`
  cursor: pointer;
`;

export const LoginBtn = styled.button.attrs({
  type: 'button',
  className: 'bg-btn-red uppercase text-primary rounded-md px-7 py-3',
})``;

export const BarsComponent = styled(FontAwesomeIcon).attrs({ icon: faBars })``;
