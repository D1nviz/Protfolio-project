import Navigation from "../Navigation";
import { contacts } from "@/constants";
import {
  NavContainer,
  HeaderContainer,
  ContactList,
  ContactItem,
} from "./styles";


const Header = () => {
  
  return (
    <HeaderContainer>
      <NavContainer>
        <Navigation/>
        <ContactList>
          {contacts.map(({ id, title, link, icon: Icon }) => (
            <ContactItem key={id}>
              <a href={link} title={title} target="_blank">
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
