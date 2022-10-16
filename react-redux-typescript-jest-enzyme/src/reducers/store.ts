import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { reducers } from './index';

const preloadedState = {};

export const store = configureStore({
  middleware: [thunk],
  reducer: reducers,
  preloadedState,
});
