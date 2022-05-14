import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContacts = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

export const deleteContacts = createAction('contacts/delete');
export const changesFilter = createAction('contacts/changeFilter');
