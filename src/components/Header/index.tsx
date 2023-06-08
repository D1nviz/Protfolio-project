"use client";
import Link from "next/link";

import { routes } from "@/routes";
import { contacts } from "@/constants";
import {
  NavContainer,
  NavList,
  NavListItem,
  HeaderContainer,
  ContactList,
  ContactItem,
} from "./styles";


const Header = () => {
  
  return (
    <HeaderContainer>
      <NavContainer>
        <NavList>
          {routes.map(({ path, label }) => (
            <NavListItem key={path}>
              <Link href={path}>{label}</Link>
            </NavListItem>
          ))}
        </NavList>
        <ContactList>
          {contacts.map(({ title, link, icon: Icon }) => (
            <ContactItem key={title}>
              <a href={link} title={title}>
                <Icon style={{ width: "3rem", height: "3rem" }} />
              </a>
            </ContactItem>
          ))}
        </ContactList>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
