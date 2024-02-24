import { createSlice } from "@reduxjs/toolkit";
import contactsjson from "../contacts.json";
import { nanoid } from "nanoid";

const getInitialState = () => {
  const savedContacts = window.localStorage.getItem("saved-contacts");

  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }

  return contactsjson;
};

const contactsSlice = createSlice({
  name: "contacts",

  initialState: getInitialState(),
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
