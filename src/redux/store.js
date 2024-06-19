import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { teachersApi } from './servises';
import { userReducer } from './userSlice';
import storage from 'redux-persist/lib/storage';
import { favoriteReducer } from './favoriteSlice';
const authConfig = {
  key: 'user',
  storage,
  whitelist: ['token', 'name', 'email', 'id'],
};
const favoritesConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favorite'],
};

export const store = configureStore({
  reducer: {
    [teachersApi.reducerPath]: teachersApi.reducer,
    user: persistReducer(authConfig, userReducer),
    favorite: persistReducer(favoritesConfig, favoriteReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(teachersApi.middleware),
});

export const persistor = persistStore(store);
