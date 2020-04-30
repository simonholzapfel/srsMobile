import React, {  } from 'react';
import {  } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import deckReducer from './store/reducers/decks';
import userReducer from './store/reducers/users';
import authReducer from './store/reducers/auth';
import MainNavigator from './navigations/MainNavigator';

enableScreens();

const rootReducer = combineReducers({
  decks: deckReducer,
  users: userReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return <Provider store={store}><MainNavigator/></Provider>;
}

export default App;