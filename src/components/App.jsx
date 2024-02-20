import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import contactsjson from "../contacts.json";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return contactsjson;
  });
  const filteredContacts = contacts.filter(
    (contact) =>
      !filter || contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const addContact = ({ name, number }) => {
    setContacts((prevUsers) => {
      return [
        ...prevUsers,
        {
          id: nanoid(),
          name: name,
          number: number,
        },
      ];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
