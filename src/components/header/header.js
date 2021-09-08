import Logo from '../../assets/logo3.png';

import {
  BarsComponent,
  LoginBtn,
  LogoContainer,
  NavContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles';

export const Header = () => {
  return (
    <header>
      <NavContainer>
        <div className="py-1">
          <LogoContainer>
            <img className="w-60" src={Logo} alt="logo" />
          </LogoContainer>
        </div>
        <OptionsContainer>
          <OptionLink to={'/features'}>Features</OptionLink>
          <OptionLink to={'/pricing'}>Pricing</OptionLink>
          <OptionLink to={'/about'}>About</OptionLink>
          <LoginBtn>Login</LoginBtn>
        </OptionsContainer>
        <div className="flex sm:hidden flex-1 justify-end">
          <BarsComponent className="text-2xl" />
        </div>
      </NavContainer>
    </header>
  );
};
