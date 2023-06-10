import { FC } from "react";
import FooterContacts from "../FooterContacts";
import Logo from "../../ui/Logo";
import { contacts } from "@/constants";
import {
  FooterContainer,
  FooterDesc,
  FooterWrapper,
  LogoDescContainer,
} from "./styles";

const Footer: FC = () => {
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
        <FooterContacts contacts={contacts} />
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
