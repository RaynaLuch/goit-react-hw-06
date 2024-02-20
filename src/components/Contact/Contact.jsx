import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export const Contact = ({ contact, onDelete }) => {
  return (
    <div>
      <p>
        <FaUserAlt /> {contact.name}
      </p>
      <p>
        <FaPhone /> {contact.number}
      </p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};
