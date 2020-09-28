import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('contacts/addRequest');
const addContactSucess = createAction('contacts/addSucess');
const addContactError = createAction('contacts/addError');

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSucess = createAction('contacts/fetchSucess');
const fetchContactsError = createAction('contacts/fetchError');

const deleteContactsRequest = createAction('contacts/deleteRequest');
const deleteContactsSucess = createAction('contacts/deletSucess');
const deleteContactsError = createAction('contacts/deleteError');

const getFilter = createAction('contacts/filter');

export default {
  deleteContactsRequest,
  deleteContactsSucess,
  deleteContactsError,
  getFilter,
  addContactRequest,
  addContactSucess,
  addContactError,
  fetchContactsSucess,
  fetchContactsRequest,
  fetchContactsError,
};
