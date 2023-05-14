import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContactsThunk,
} from './operations';
import { logOut } from 'redux/auth/operations';

const arrThunk = [addContactsThunk, deleteContactsThunk, fetchContactsThunk];

const createThunk = type => arrThunk.map(el => el[type]);

const listContacts = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const handleFulfilledFetchContacts = (state, action) => {
  state.items = action.payload;
};
const handleFulfilledAddContacts = (state, action) => {
  state.items.push(action.payload);
};
const handleFulfilledDeleteContacts = (state, action) => {
  const index = state.items.findIndex(contact => contact.id === action.payload);
  state.items.splice(index, 1);
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledLogOut = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: listContacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledFetchContacts)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAddContacts)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDeleteContacts)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addMatcher(isAnyOf(...createThunk('pending')), handlePending)
      .addMatcher(isAnyOf(...createThunk('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...createThunk('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
