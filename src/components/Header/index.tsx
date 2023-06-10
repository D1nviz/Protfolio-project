import { FC } from "react";
import Navigation from "../Navigation";
import { contacts } from "@/constants";
import { navLinks } from "@/constants";
import Logo from "@/ui/Logo";
import {
  NavContainer,
  HeaderContainer,
  ContactList,
  ContactItem,
  NavLogoContainer,
} from "./styles";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <NavLogoContainer>
          <Logo />
          <Navigation navLinks={navLinks} />
        </NavLogoContainer>
        <ContactList>
          {contacts.map(({ id, title, link, icon: Icon }) => (
            <ContactItem key={id}>
              <a href={link} title={title} target="_blank">
                <Icon
                  color="#1b1b1b "
                  style={{ width: "3rem", height: "3rem" }}
                />
              </a>
            </ContactItem>
          ))}
        </ContactList>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
