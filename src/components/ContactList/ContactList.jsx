import React, { useEffect } from 'react';
import css from 'components/ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/contacts.reducer';
import { selectVisibleContacts } from 'redux/contacts/contacts.selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, phone }) => {
          return (
            <li key={id} className={css.listItem}>
              <p>{name}</p>
              <span>{phone}</span>
              <button
                type="button"
                className={css.button}
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </button>
            </li>
          );
        })
      ) : (
        <p>Sorry, no contacts :( </p>
      )}
    </ul>
  );
};
