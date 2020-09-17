import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import { useDispatch } from 'react-redux';
import localforage from 'localforage';
// import thunk from 'redux-thunk';

// const rootConfig = {
//   key: 'root',
//   storage: FilesystemStorage,
//   stateReconciler: hardSet,

//   // debug: true,
//   // blacklist: ['intro']
// };
// const middleware = [thunk];
// const introConfig = {
//   key: 'intro',
//   storage: FilesystemStorage,
//   // stateReconciler: hardSet,
//   debug: true,
//   blacklist: ['root']
// };

// const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, authReducer),
//   other: otherReducer,
// })
const persistedReducer = persistReducer(
  {
    key: 'main',
    storage: localforage,
    stateReconciler: hardSet,
    timeout: 20000,
    debug: true,
  },
  rootReducer
);

export const store = createStore(
  persistedReducer,
  // compose(
  //   applyMiddleware(thunk)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

export const persistor = persistStore(store);
