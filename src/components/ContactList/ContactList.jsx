import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => {
  let contactlist = contacts.map(function (contact) {
    return (
      <li key={contact.id} className={css.listItem}>
        <Contact contact={contact} onDelete={onDelete} />
      </li>
    );
  });
  return <ul className={css.list}>{contactlist}</ul>;
};
