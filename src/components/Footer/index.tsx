import FooterContacts from "../FooterContacts";
import { FooterContainer, FooterDesc, FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterDesc>©Created By Dinviz.<br/>2023 All Rights Reserved.</FooterDesc>
        <FooterContacts />
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
