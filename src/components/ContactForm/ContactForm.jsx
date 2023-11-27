import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { addContact } from 'redux/contacts/contacts.reducer';
import css from 'components/ContactForm/ContactForm.module.css';
import { Loader } from 'components/Loader/Loader';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contacts.selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();

    const newUser = {
      id: nanoid(),
      name: name,
      phone: Number.parseFloat(phone),
    };

    const hasDuplicates = contacts.some(
      item =>
        item.name.toLowerCase() === newUser.name.toLowerCase() ||
        item.phone === newUser.phone
    );

    if (hasDuplicates) {
      Notiflix.Notify.failure(`A contact with the name: '${newUser.name}' and 
      number: '${newUser.phone}' is already in the list!`);
      return;
    }
    dispatch(addContact(newUser));

    setName('');
    setPhone('');
  };

  const onChangeInput = e => {
    const value = e.target.value;
    const nameInput = e.target.name;

    switch (nameInput) {
      case 'name':
        setName(value);
        return;

      case 'number':
        setPhone(value);
        return;

      default:
        return;
    }
  };

  return (
    <div>
      {isLoading && <Loader />}
      <form className={css.form} onSubmit={onFormSubmit}>
        <label className={css.labelForm}>Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className={css.inputForm}
          value={name}
          onChange={onChangeInput}
        />
        <label className={css.labelForm}>Number</label>
        <input
          type="tel"
          name="number"
          required
          placeholder="Your number"
          pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
          className={css.inputForm}
          value={phone}
          onChange={onChangeInput}
        />
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </form>
    </div>
  );
};
