import { FC } from "react";
import { IContact } from "@/types";
import {
  ContactsList,
  ContactsContainer,
  ContactsListItem,
  ContactsTitle,
} from "./styles";

interface IFooterContactsProps {
  contacts: IContact[];
}
const FooterContacts: FC<IFooterContactsProps> = ({ contacts }) => {
  return (
    <ContactsContainer>
      <ContactsTitle>Contacts:</ContactsTitle>
      <ContactsList>
        {contacts.map(({ title, link, id }) => (
          <ContactsListItem key={id}>
            <a href={link} target="_blank">
              {title}
            </a>
          </ContactsListItem>
        ))}
      </ContactsList>
    </ContactsContainer>
  );
};

export default FooterContacts;
