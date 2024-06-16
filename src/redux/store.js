import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  //persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { teachersApi } from './servises';
//import storage from 'redux-persist/lib/storage';

// const favoritesConfig = {
//   key: 'favorites',
//   storage,
//   whitelist: ['favorites'],
// };

export const store = configureStore({
  reducer: {
    [teachersApi.reducerPath]: teachersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(teachersApi.middleware),
});

export const persistor = persistStore(store);
