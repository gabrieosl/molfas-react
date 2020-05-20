import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'fortureapp',
      storage,
      whitelist: ['authAdmin', 'authStore', 'cart', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
