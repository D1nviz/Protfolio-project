import { contacts } from "@/constants";
import { ContactsList, ContactsContainer, ContactsListItem, ContactsTitle } from "./styles"


const FooterContacts = () => {
  return (
    <ContactsContainer>
      <ContactsTitle>Contacts:</ContactsTitle>
      <ContactsList>
        {contacts.map(({title, link, id}) => (
          <ContactsListItem key={id}><a href={link}>{title}</a></ContactsListItem>
        ))}
      </ContactsList>
    </ContactsContainer>
  )
}

export default FooterContacts;