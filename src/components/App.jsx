import React from 'react';

import css from 'components/ContactForm/ContactForm.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title';

export const App = () => {
  return (
    <div className={css.container}>
      <Title title={'Phonebook'} />
      <ContactForm />
      <Title title={'Contacts'} />
      <Filter />
      <ContactList />
    </div>
  );
};
