import { contactReducer } from './contacts/contacts.reducer';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: {
    contactsStore: contactReducer,
  },
});
