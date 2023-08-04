import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// slices
import testReducer from '@/common/redux/slices/test';

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

const testConfig = {
  key: 'test',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['value'],
};

const rootReducer = combineReducers({
  test: persistReducer(testConfig, testReducer),
});

export { rootPersistConfig, rootReducer };
