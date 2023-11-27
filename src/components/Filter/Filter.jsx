import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from 'components/Filter/Filter.module.css';
import { filterValue } from 'redux/contacts/contacts.reducer';
import { selectFilter } from 'redux/contacts/contacts.selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChangeInput = e => {
    const value = e.target.value;
    dispatch(filterValue(value));
  };

  return (
    <div className={css.container}>
      <label className={css.labelForm}>Find contact by name</label>
      <input
        type="text"
        name="filter"
        className={css.inputForm}
        onChange={onChangeInput}
        value={filter}
      />
    </div>
  );
};
