import { combineReducers } from 'redux';
import contactActions from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';
const addContacts = (state, action) => [...state, action.payload];
const onDeleteContacts = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const items = createReducer([], {
  [contactActions.addContactSucess]: addContacts,
  [contactActions.deleteContactsSucess]: onDeleteContacts,
  [contactsActions.fetchContactsSucess]: (state, action) => action.payload,
});
const loading = createReducer(false, {
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSucess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactsRequest]: () => true,
  [contactsActions.deleteContactsSucess]: () => false,
  [contactsActions.deleteContactsError]: () => false,
});
const filter = createReducer('', {
  [contactActions.getFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
