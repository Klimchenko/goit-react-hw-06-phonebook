import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { addContacts, deleteContacts, changesFilter } from './contacts-actions';

const items = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  {
    [addContacts]: (state, action) => [...state, action.payload],
    [deleteContacts]: (state, action) =>
      state.filter(({ id }) => id !== action.payload),
  },
);

const filter = createReducer('', {
  [changesFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
