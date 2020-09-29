import { createSelector } from "@reduxjs/toolkit";

const getItems = state => state.contacts.items;
const loading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;

const getFilteredContacts = (state) => {
  const filter = getFilter(state).toLowerCase();
  const items = getItems(state);
  console.log(items)
  return items.filter((item) => item.name.toLowerCase().includes(filter));
};

const getContactById = (state, contactId) => {
  const items = getItems(state);
  return items.find((item) => item.id === contactId);
};

export default {
  getFilter,
  getItems,
 getFilteredContacts,
  loading,
  getContactById,
};
