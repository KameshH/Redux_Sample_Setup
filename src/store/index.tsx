import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/counterReducer';
import fetchReducer from '../thunk/profileData'

const appReducer = combineReducers({
    counter: counterReducer,
    fetchPosts: fetchReducer

});

const store = configureStore({
    reducer: appReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
