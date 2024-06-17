import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Redux/authSlice';
import clientReducer from '../Redux/clientSlice';

import localStorageMiddleware from '../Middleware/LocalStorageMiddleware';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    client: clientReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),

});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch;