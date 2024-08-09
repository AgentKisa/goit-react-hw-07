import { createSelector } from "@reduxjs/toolkit";

export const selectFilter = (state) => state.filters.name;
export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contact, filter) => {
    return contact.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
