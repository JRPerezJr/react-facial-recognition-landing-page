import React from 'react';

import Logo from '../../assets/logo2.png';

import {
  FacebookIcon,
  StyledFooterComponent,
  StyledFooterContainer,
  StyledFooterContentContainer,
  StyledFooterLI,
  StyledFooterSocialMediaIconContainer,
  StyledFooterUL,
  StyledSocialMediaListComponent,
  TwitterIcon,
} from './footer.styles';

export const FooterComponent = () => {
  return (
    <StyledFooterComponent>
      <StyledFooterContainer>
        <StyledFooterContentContainer>
          <img className="w-40" src={Logo} alt="logo" />
          <StyledFooterUL>
            <StyledFooterLI>Features</StyledFooterLI>
            <StyledFooterLI>Pricing</StyledFooterLI>
            <StyledFooterLI>Contact</StyledFooterLI>
          </StyledFooterUL>
        </StyledFooterContentContainer>
        {/*Social Media Icons*/}
        <StyledFooterSocialMediaIconContainer>
          <StyledSocialMediaListComponent>
            <TwitterIcon />
          </StyledSocialMediaListComponent>
          <StyledSocialMediaListComponent>
            <FacebookIcon />
          </StyledSocialMediaListComponent>
        </StyledFooterSocialMediaIconContainer>
      </StyledFooterContainer>
    </StyledFooterComponent>
  );
};
