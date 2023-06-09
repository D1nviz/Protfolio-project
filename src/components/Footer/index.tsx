import FooterContacts from "../FooterContacts";
import Logo from "../Logo";
import {
  FooterContainer,
  FooterDesc,
  FooterWrapper,
  LogoDescContainer,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LogoDescContainer>
          <Logo />
          <FooterDesc>
            ©Created By Dinviz.
            <br />
            2023 All Rights Reserved.
          </FooterDesc>
        </LogoDescContainer>
        <FooterContacts />
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
